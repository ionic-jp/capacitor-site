import { Component, h, Host, State } from '@stencil/core';

import Helmet from '@stencil/helmet';
import { ResponsiveContainer, Grid, Col, Paragraph, Heading, AnchorButton } from '@ionic-internal/sites-shared';
import { Tabs, Tab, TabBar, TabBarButton } from '../tabs';

@Component({
  tag: 'cordova-landing-page',
  styleUrl: 'cordova-landing-page.scss',
  scoped: true
})
export class CordovaLandingPage {
  @State() selectedCodeTab: string = 'before' ;

  render() {
    return (
      <Host>
        <MetaHead />
        <section class="hero">
          <ResponsiveContainer>
            <Grid>
              <Col md={12} sm={12} xs={12} cols={12}>
                <hgroup class="hero__heading">
                  <Heading level={2}>
                    Capacitorへのマイグレーション
                  </Heading>
                  <Heading level={3}>
                  Capacitorによるモダンな開発経験とCordovaとの99％の下位互換性
                  </Heading>
                  <AnchorButton href="#code-branch" id="get-started">
                      はじめ方
                  </AnchorButton>
                </hgroup>
              </Col>
            </Grid>
          </ResponsiveContainer>
        </section>
        <GettingStartedSection
          selectedCodeTab={this.selectedCodeTab}
          setSelectedCodeTab={(tab: string) => { this.selectedCodeTab = tab}} />

        <MoreResourcesSection />
        <newsletter-signup />
        <pre-footer />
        <capacitor-site-footer />
      </Host>
    );
  }
}

const GettingStartedSection = ({ selectedCodeTab, setSelectedCodeTab}: { selectedCodeTab: string, setSelectedCodeTab: (tab: string) => void }) => (
  <section class="section--getting-started">
    <ResponsiveContainer>
      <Grid class="section--getting-started__step">
        <Col cols={1}>01</Col>
        <Col md={5} sm={5} xs={5} cols={12}>
          <Heading level={3} id="code-branch">新しいブランチを作成します。</Heading>
          <Paragraph>
            推奨ですが、必須ではありません。
          </Paragraph>
        </Col>
        <Col md={6} sm={6} xs={6} cols={12}>
          <code-snippet language="shell-session" code={`
cd my-app
git checkout -b cap-migration
          `}/>
        </Col>
      </Grid>
      <Grid class="section--getting-started__step">
        <Col cols={1}>02</Col>
        <Col md={5} sm={5} xs={5} cols={12}>
          <Heading level={3}>Capacitorをインストール。</Heading>
          <Paragraph>
            `config.xml` にあるCordovaアプリの名前とIDを使用してCapacitorアプリを作成します。
          </Paragraph>
        </Col>
        <Col md={6} sm={6} xs={6} cols={12}>
          <code-snippet language="shell-session" code={`
npm install @capacitor/cli @capacitor/core
npx cap init [name] [id]
`} />
        </Col>
      </Grid>
      <Grid class="section--getting-started__step">
        <Col cols={1}>03</Col>
        <Col md={5} sm={5} xs={5} cols={12}>
          <Heading level={3}>Webアプリをビルドします。</Heading>
          <Paragraph>
            コンパイルされたWebアセットは、
            次のステップでCapacitorの各ネイティブプラットフォームにコピーされます。
          </Paragraph>
        </Col>
        <Col md={6} sm={6} xs={6} cols={12}>
          <code-snippet language="shell-session" code={`
# Most web apps
npm run build

# Ionic app
ionic build
`} />
        </Col>
      </Grid>
      <Grid class="section--getting-started__step">
        <Col cols={1}>04</Col>
        <Col md={5} sm={5} xs={5} cols={12}>
          <Heading level={3}>ターゲットにするネイティブプラットフォームをインストール。</Heading>
          <img src="/assets/img/landing/apple.png" alt="Apple" class="apple" />
          <img src="/assets/img/landing/android.png" alt="Android" class="android" />
          <Paragraph>
            Capacitorネイティブプロジェクトは独自の最上位フォルダーに存在し、アプリの一部と見なされます
            （ソース管理にチェックインします）。
            既存のCordovaプラグインは、各ネイティブプロジェクトに自動的にインストールされます。🎉
          </Paragraph>
        </Col>
        <Col md={6} sm={6} xs={6} cols={12}>
          <code-snippet language="shell-session" code={`
npx cap add android
npx cap add ios
`} />
        </Col>
      </Grid>
      <Grid class="section--getting-started__step">
        <Col cols={1}>05</Col>
        <Col md={5} sm={5} xs={5} cols={12}>
          <Heading level={3}>スプラッシュスクリーンとアイコンの再作成。</Heading>
          <Paragraph>
          `cordova-res` ツールを使用して、Cordovaプロジェクトの最上位の `resources` フォルダにある
          既存のスプラッシュスクリーン/アイコン画像を再利用します。画像は各ネイティブプロジェクトにコピーされます。
          </Paragraph>
        </Col>
        <Col md={6} sm={6} xs={6} cols={12}>
          <code-snippet language="shell-session" code={`
npm install -g cordova-res

cordova-res ios --skip-config --copy
cordova-res android --skip-config --copy
`} />
        </Col>
      </Grid>
      <Grid class="section--getting-started__step">
        <Col cols={1}>06</Col>
        <Col md={5} sm={5} xs={5} cols={12}>
          <Heading level={3}>既存のCordovaプラグインを監査。</Heading>
          <Paragraph>
            Capacitorのすべての<a href="/docs/apis" target="_blank">コア</a>プラグインと<a href="/docs/community/plugins" target="_blank">コミュニティプラグイン</a>を確認します。
            カメラなど、Cordovaと同等のCapacitorプラグインに切り替えることができる場合があります。
          </Paragraph>
          <Paragraph>
            不要なものを削除して、パフォーマンスを向上させ、アプリのサイズを小さくします。
          </Paragraph>
        </Col>
        <Col md={6} sm={6} xs={6} cols={12}>
          <Tabs>
            <TabBar>
              <TabBarButton
                selected={selectedCodeTab === 'before'}
                tabSelect={() => setSelectedCodeTab('before')}>
                Cordova Camera
              </TabBarButton>
              <TabBarButton
                selected={selectedCodeTab === 'after'}
                tabSelect={() => setSelectedCodeTab('after')}>
                Capacitor Camera
              </TabBarButton>
            </TabBar>
            <Tab selected={selectedCodeTab === 'before'}>
              <code-snippet
                style={{ '--border-radius': '0 0 8px 8px' }}
                language="typescript"
                code={`
import { Camera } from '@ionic-native/camera/ngx';

constructor(private camera: Camera) {}

const photo = await this.camera.getPicture({
  quality: 100,
  destinationType: this.camera.DestinationType.FILE_URI,
  allowEdit: true,
  saveToPhotoAlbum: true
});
`} />
            </Tab>
            <Tab
              selected={selectedCodeTab === 'after'}>
              <code-snippet
                style={{ '--border-radius': '0 0 8px 8px' }}
                language="typescript"
                code={`
import { Plugins } from '@capacitor/core';

const { Camera } = Plugins;

const photo = await Camera.getPhoto({
  quality: 100,
  resultType: CameraResultType.Uri,
  allowEditing: true,
  saveToGallery: true
});
`} />
            </Tab>
        </Tabs>
        </Col>
      </Grid>
      <Grid class="section--getting-started__step">
        <Col cols={1}>07</Col>
        <Col md={5} sm={5} xs={5} cols={12}>
          <Heading level={3}>プロジェクトからCordovaを削除。</Heading>
          <Paragraph>
            移行テストが成功したら、Cordovaをプロジェクトから削除できます。
          </Paragraph>
        </Col>
        <Col md={6} sm={6} xs={6} cols={12}>
          <code-snippet language="shell-session" code={`
# Remove a Cordova plugin
npm uninstall cordova-plugin-name
npx cap sync

# Delete Cordova folders and files
rm config.xml
rm -R platforms/
rm -R plugins/
`} />
        </Col>
      </Grid>
      <Grid class="section--getting-started__step">
        <Col cols={1}>08</Col>
        <Col md={5} sm={5} xs={5} cols={12}>
          <Heading level={3}>Capacitorの旅を続けよう。</Heading>
          <Paragraph>
            これは序章に過ぎません。Capacitorプロジェクトでの<a href="/docs/cordova/using-cordova-plugins" target="_blank">Cordovaプラグイン</a>の使い方、
            Capacitorの<a href="/docs/basics/workflow" target="_blank">開発フロー</a>、
            自分自身の<a href="/docs/plugins" target="_blank">ネイティブプラグイン</a>のつくり方を学びましょう.
          </Paragraph>
        </Col>
        <Col md={6} sm={6} xs={6} cols={12}>
          <code-snippet language="shell-session" code={`
# Install a Cordova plugin
npm install cordova-plugin-name
npx cap sync

# Create a custom plugin
npx @capacitor/cli plugin:generate
`} />
        </Col>
      </Grid>
      </ResponsiveContainer>
      </section>
)

const MoreResourcesSection = () => (
  <ResponsiveContainer class="section--more-resources">
    <hgroup>
      <Heading level={3}>その他のリソース</Heading>
      <Paragraph>
        これらのリソースを調べて、Capacitorの詳細を学び
        <br />
        Cordovaからの移行を容易にしてください。
      </Paragraph>
    </hgroup>
    <more-resources resources={[
      { uid: 'capacitor-vs-cordova-modern-hybrid-app-development', type: 'article' },
      { uid: 'capacitor-2-launch', type: 'webinar' },
      { uid: 'migrating-from-phonegap-build-to-ionic-appflow', type: 'blog' },
      { uid: 'thanks-to-capacitor-ive-fallen-in-love-with-mobile-again', type: 'blog' },
      { uid: 'the-modern-hybrid-app-developer', type: 'blog' },
    ]} />
  </ResponsiveContainer>
)

const MetaHead = () => (
  <Helmet>
    <title>Capacitor: Cross-platform native runtime for web apps</title>
    <meta
      name="description"
      content={'Build iOS, Android, and Progressive Web Apps with HTML, CSS, and JavaScript'}
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@capacitorjs" />
    <meta name="twitter:creator" content="capacitorjs" />
    <meta name="twitter:title" content="Build cross-platform apps with web technologies" />
    <meta
      name="twitter:description"
      content="Build cross-platform apps with web technologies"
    />
  </Helmet>
)
