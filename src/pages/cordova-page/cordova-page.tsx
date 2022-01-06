import { Component, h, Host, State } from '@stencil/core';

import {
  ResponsiveContainer,
  Paragraph,
  Heading,
} from '@ionic-internal/ionic-ds';
import { href } from '@stencil/router';

@Component({
  tag: 'cordova-page',
  styleUrl: 'cordova-page.scss',
  scoped: true,
})
export class CordovaPage {
  @State() selectedCodeTab: string = 'before';

  render() {
    const { Top, GettingStarted, MoreResources } = this;

    return (
      <Host>
        <meta-tags
          page-title={`Cordova to Capacitor Migration`}
          description={'A step by step guide to migrating your app'}
        />

        <Top />
        <GettingStarted />

        <MoreResources />

        <ResponsiveContainer id="newsletter">
          <newsletter-signup />
        </ResponsiveContainer>
        <pre-footer />
        <capacitor-site-footer />
      </Host>
    );
  }

  Top = () => (
    <ResponsiveContainer id="top" as="section">
      <div class="heading-group">
        <Heading level={2} as="h1">
          Cordova to Capacitor Migration
        </Heading>
        <Paragraph level={2}>
          A modern development experience and 99% backward-compatibility with
          Cordova.
        </Paragraph>
        {/* <Button anchor href="#code-branch" id="get-started">
          Get Started
        </Button> */}
      </div>
    </ResponsiveContainer>
  );

  GettingStarted = () => (
    <ResponsiveContainer id="getting-started" as="section">
      <article class="step">
        <sup class="ui-heading-6">01</sup>
        <div class="heading-group">
          <Heading level={3} id="code-branch">
            新しいブランチを作成します。
          </Heading>
          <Paragraph>推奨ですが、必須ではありません。</Paragraph>
        </div>
        <div class="code-panel">
          <code-snippet
            language="shell-session"
            code={`
cd my-app
git checkout -b cap-migration
          `}
          />
        </div>
      </article>
      <article class="step">
        <sup class="ui-heading-6">02</sup>
        <div class="heading-group">
          <Heading level={3}>Capacitorをインストール。</Heading>
          <Paragraph>
            `config.xml` にあるCordovaアプリの名前とIDを使用して
            Capacitorアプリを作成します。
          </Paragraph>
        </div>
        <div class="code-panel">
          <code-snippet
            language="shell-session"
            code={`
npm install @capacitor/cli @capacitor/core
npx cap init [name] [id]
`}
          />
        </div>
      </article>
      <article class="step">
        <sup class="ui-heading-6">03</sup>
        <div class="heading-group">
          <Heading level={3}>Webアプリをビルドします。</Heading>
          <Paragraph>
            コンパイルされたWebアセットは、
            次のステップでCapacitorの各ネイティブプラットフォームにコピーされます。
          </Paragraph>
        </div>
        <div class="code-panel">
          <code-snippet
            language="shell-session"
            code={`
# Most web apps
npm run build

# Ionic app
ionic build
`}
          />
        </div>
      </article>
      <article class="step">
        <sup class="ui-heading-6">04</sup>
        <div class="heading-group">
          <Heading level={3}>
            ターゲットにするネイティブプラットフォームをインストール。
          </Heading>
          <div class="platforms">
            <img
              loading="lazy"
              src="/assets/img/landing/apple.png"
              alt="Apple"
              class="apple"
              width="22"
              height="26"
            />
            <img
              loading="lazy"
              src="/assets/img/landing/android.png"
              alt="Android"
              class="android"
              width="27"
              height="23"
            />
          </div>
          <Paragraph>
            Capacitorネイティブプロジェクトは独自の最上位フォルダーに存在し、アプリの一部と見なされます
            （ソース管理にチェックインします）。
            既存のCordovaプラグインは、各ネイティブプロジェクトに
            自動的にインストールされます。🎉
          </Paragraph>
        </div>
        <div class="code-panel">
          <code-snippet
            language="shell-session"
            code={`
npx cap add android
npx cap add ios
`}
          />
        </div>
      </article>
      <article class="step">
        <sup class="ui-heading-6">05</sup>
        <div class="heading-group">
          <Heading level={3}>
            スプラッシュスクリーンとアイコンの再作成。
          </Heading>
          <Paragraph>
            `cordova-res` ツールを使用して、Cordovaプロジェクトの最上位の
            `resources` フォルダにある
            既存のスプラッシュスクリーン/アイコン画像を再利用します。
            画像は各ネイティブプロジェクトにコピーされます。
          </Paragraph>
        </div>
        <div class="code-panel">
          <code-snippet
            language="shell-session"
            code={`
npm install -g cordova-res

cordova-res ios --skip-config --copy
cordova-res android --skip-config --copy
`}
          />
        </div>
      </article>
      <article class="step">
        <sup class="ui-heading-6">06</sup>
        <div class="heading-group">
          <Heading level={3}>既存のCordovaプラグインを監査。</Heading>
          <Paragraph>
            すべてのCapacitorの{' '}
            <a {...href('/docs/apis')} target="_blank">
              コア
            </a>{' '}
            と{' '}
            <a {...href('/docs/plugins/community')} target="_blank">
              コミュニティ
            </a>{' '}
            プラグインをご確認ください。 Cordovaと同等のCapacitorプラグインに
            切り替えることができる場合があります。
          </Paragraph>
          <Paragraph>
            不要なものを削除して、パフォーマンスを向上させ、アプリのサイズを小さくします。
          </Paragraph>
        </div>
        <div class="code-panel">
          <code-tabs
            data={{
              tabs: ['Cordova Camera', 'Capacitor Camera'],
              languages: ['typescript'],
              code: [
                `
import { Camera } from '@ionic-native/camera/ngx';

constructor(private camera: Camera) {}

const photo = await this.camera.getPicture({
  quality: 100,
  destinationType: this.camera.DestinationType.FILE_URI,
  allowEdit: true,
  saveToPhotoAlbum: true
});
`, //----------------------------------
                `
import { Camera } from '@capacitor/camera';

const photo = await Camera.getPhoto({
  quality: 100,
  resultType: CameraResultType.Uri,
  allowEditing: true,
  saveToGallery: true
});
`,
              ],
            }}
          />
        </div>
      </article>
      <article class="step">
        <sup class="ui-heading-6">07</sup>
        <div class="heading-group">
          <Heading level={3}>プロジェクトからCordovaを削除。</Heading>
          <Paragraph>
            移行テストが成功したら、Cordovaをプロジェクトから 削除できます。
          </Paragraph>
        </div>
        <div class="code-panel">
          <code-snippet
            language="shell-session"
            code={`
# Remove a Cordova plugin
npm uninstall cordova-plugin-name
npx cap sync

# Delete Cordova folders and files
rm config.xml
rm -R platforms/
rm -R plugins/
`}
          />
        </div>
      </article>
      <article class="step">
        <sup class="ui-heading-6">08</sup>
        <div class="heading-group">
          <Heading level={3}>Capacitorの旅を続けよう。</Heading>
          <Paragraph>
            これははじまりにすぎません。続いて、{' '}
            <a {...href('/docs/plugins/cordova')}> Cordovaプラグインを</a>{' '}
            Capacitorで使う方法と、Capacitorの{' '}
            <a {...href('/docs/basics/workflow')}>開発フロー</a> や 自分自身の{' '}
            <a {...href('/docs/plugins')}>ネイティブプラグイン</a>{' '}
            をつくったりしましょう。
          </Paragraph>
        </div>
        <div class="code-panel">
          <code-snippet
            language="shell-session"
            code={`
# Install a Cordova plugin
npm install cordova-plugin-name
npx cap sync

# Create a custom plugin
npm init @capacitor/plugin
`}
          />
        </div>
      </article>
    </ResponsiveContainer>
  );

  MoreResources = () => (
    <ResponsiveContainer id="more-resources">
      <div class="heading-group">
        <Heading level={3}>More Resources</Heading>
        <Paragraph>
          Explore these resources to learn more about Capacitor
          <br />
          and make your Cordova migration easier.
        </Paragraph>
      </div>
      <more-resources
        resourceData={[
          {
            uid: 'capacitor-vs-cordova-modern-hybrid-app-development',
            type: 'article',
          },
          { uid: 'capacitor-2-launch', type: 'webinar' },
          {
            uid: 'migrating-from-phonegap-build-to-ionic-appflow',
            type: 'blog',
          },
          {
            uid: 'thanks-to-capacitor-ive-fallen-in-love-with-mobile-again',
            type: 'blog',
          },
          { uid: 'the-modern-hybrid-app-developer', type: 'blog' },
        ]}
        routing={{
          base: 'https://ionicframework.com/resources',
        }}
      />
    </ResponsiveContainer>
  );
}
