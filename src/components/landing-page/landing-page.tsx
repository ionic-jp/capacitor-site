import { Component, h, Host, State } from '@stencil/core';

import Helmet from '@stencil/helmet';
import { ResponsiveContainer, Grid, Col, AnchorButton, Heading, Paragraph, Breakpoint } from '@ionic-internal/sites-shared';
import { Tabs, Tab, TabBar, TabBarButton } from '../tabs';
import FancyUnderline from '../FancyUnderline';

@Component({
  tag: 'landing-page',
  styleUrl: 'landing-page.scss',
  scoped: true
})
export class LandingPage {
  @State() selectedCodeTab: string = 'notifications' ;
  render() {
    return (
      <Host>
        <MetaHead />
        <section class="hero">
          <div class="hero__background"></div>
          <ResponsiveContainer>
            <Grid>
              <Col md={6} sm={6} xs={6} cols={12}>
                <hgroup class="hero__heading">
                <a class="feature__register" href="https://ionicframework.com/resources/webinars/hybrid-app-development-redefined" target="_blank" rel="noopener nofollow">
                  <div class="feature__register__tag">Live demo</div>
                    <Breakpoint mobile={false} tablet={false} desktop={true} inlineBlock={true} class="feature__register__text">
                      <span class="text__content">
                        Hybrid vs. Native Webinar Wed, July 22nd <span style={{'letter-spacing':'0'}}>-&gt;</span>
                      </span>
                    </Breakpoint>
                    <Breakpoint mobile={false} tablet={true} desktop={false} inlineBlock={true} class="feature__register__text">
                      <span class="text__content">
                        Hybrid vs. Native Webinar July 22nd<span style={{'letter-spacing':'0'}}>-&gt;</span>
                      </span>
                    </Breakpoint>
                    <Breakpoint mobile={true} tablet={false} desktop={false} inlineBlock={true} class="feature__register__text">
                      <span class="text__content">
                        Hybrid vs. Native Webinar <span style={{'letter-spacing':'0'}}>-&gt;</span>
                      </span>
                    </Breakpoint>
                </a>
                  <Heading level={1}>
                    Webアプリをクロスプラットフォームに展開。
                  </Heading>
                  <Heading level={3}>
                    Capacitorはどんなウェブアプリでもネイティブアプリにすることができるので
                    iOS、Android、ウェブを横断して同じコードで一つのアプリを走らせることができます。
                  </Heading>
                  <div class="hero__buttons">
                    <AnchorButton href="/docs/getting-started" id="get-started">
                      はじめ方
                    </AnchorButton>
                    <AnchorButton href="/docs" id="explore-docs" class="btn-white">
                      ドキュメント
                    </AnchorButton>
                  </div>
                </hgroup>
                <div class="cordova-cta">
                  <a href="/cordova">Cordovaからの移行 {"->"}</a>
                </div>
                <img class="hero__platforms" src="/assets/img/supported-icons.png" alt="Supported platforms" />
              </Col>
              <Col md={6} sm={6} xs={6} cols={12} class="hero__graphic">
                <img src="/assets/img/landing/hero-graphic.png" alt="Capacitor Architecture Diagram" />
              </Col>
            </Grid>
          </ResponsiveContainer>
        </section>
        <GettingStartedSection
          selectedCodeTab={this.selectedCodeTab}
          setSelectedCodeTab={(tab: string) => { this.selectedCodeTab = tab}}/>
        <ResponsiveContainer>
          <section class="section--web-apps-to-native">
            <hgroup>
              <Heading level={3}>
                Webアプリを接続する<br />
                <FancyUnderline>ネイティブ機能</FancyUnderline>
              </Heading>
            </hgroup>
            <Grid>
              <Col md={4} sm={4} xs={12} cols={12}>
                <img src="/assets/img/landing/universal-apps.png" alt="Universal apps" />
                <Heading level={4}>
                  ユニバーサルアプリ
                </Heading>
                <Paragraph>
                  iOS、Android、およびProgressive Web Appsで同じように動作するWebベースのアプリケーションを構築します。
                </Paragraph>
              </Col>
              <Col md={4} sm={4} xs={12} cols={12}>
                <img src="/assets/img/landing/native-access.png" alt="Native access" />
                <Heading level={4}>
                  ネイティブアクセス
                </Heading>
                <Paragraph>
                  各プラットフォームで完全なネイティブSDKにアクセスし、アプリストア（およびWeb）に簡単にデプロイします。
                </Paragraph>
              </Col>
              <Col md={4} sm={4} xs={12} cols={12}>
                <img src="/assets/img/landing/native-pwas.png" alt="Native PWAs" />
                <Heading level={4}>
                  ネイティブPWA
                </Heading>
                <Paragraph>
                  簡単に利用できるプラグインAPIでカスタムのネイティブ機能を追加するか、既存のCordovaプラグインを互換性レイヤーで使用します。
                </Paragraph>
              </Col>
            </Grid>
          </section>
          <section class="section--native-features">
            <hgroup>
              <Heading level={3}>
                クロスプラットフォームのコア<br />
                <FancyUnderline>ネイティブ機能</FancyUnderline>
              </Heading>
            </hgroup>
            <Grid>
              {[
                {
                  key: 'camera',
                  name: 'カメラ',
                  desc: '写真をキャプチャして保存し、フォーカスやホワイトバランスなどのハードウェアパラメータを構成します。'
                },
                {
                  key: 'filesystem',
                  name: 'ファイルシステム\n',
                  desc: 'ネイティブファイルシステムにアクセスすることで、ユーザーが必要とするアセット、ドキュメント、その他のデータを保存して読み込みます。'
                },
                {
                  key: 'geolocation',
                  name: 'ジオロケーション',
                  desc: '現在のデバイスの場所をポーリングしたり、位置情報の更新を監視することで、位置認識アプリを構築します。'
                },
                {
                  key: 'accelerometer',
                  name: '加速度計',
                  desc: 'デバイスの加速度センサーにアクセスして、3D空間でのデバイスの動きの変化に対応します。'
                },
                {
                  key: 'notifications',
                  name: '通知',
                  desc: 'ローカル通知とサーバープッシュ通知を送信・応答するアプリケーションを構築します'
                },
                {
                  key: 'haptics',
                  name: 'Haptics',
                  desc: 'Hapticsハードウェアを使用して、ユーザーアクションの物理的なフィードバックを提供します'
                },
                {
                  key: 'accessibility',
                  name: 'アクセシビリティ',
                  desc: 'アクセシビリティの状態の変化に対応し、a11y機能でアプリを拡張します'
                },
                {
                  key: 'custom',
                  name: 'YourのPlugin',
                  desc: 'アプリをカスタムネイティブコードとウェブコードで拡張して、プラットフォーム間で一貫したAPIを提供します。'
                }
              ].map(f => (
              <Col md={3} sm={3} xs={6} cols={12} key={f.key}>
                <img src={`/assets/img/landing/native-${f.key}.png`} alt={f.name} />
                <Heading level={4}>
                  {f.name}
                </Heading>
                <Paragraph>
                  {f.desc}
                </Paragraph>
              </Col>
              ))}
            </Grid>
          </section>
          <section class="section--your-framework">
            <hgroup>
              <Heading level={3}>
                自分で選んだ<br />
                <FancyUnderline>Webフレームワーク</FancyUnderline>
              </Heading>
              <Paragraph>
                Capacitorを既存のWebアプリプロジェクト、フレームワーク、またはライブラリに導入します。既存のReact、Angular、Svelte、Vue（またはお好みのWebフレームワーク）プロジェクトをネイティブモバイルに変換し、任意のUIライブラリを使うことができます。
              </Paragraph>
            </hgroup>
            <Grid>
              {[
                { color: '#EDFBFF', key: 'react', name: 'React' },
                { color: '#FFEDF1', key: 'angular', name: 'Angular' },
                { color: '#FFF5F2', key: 'svelte', name: 'Svelte' },
                { color: '#EFFAF5', key: 'vue', name: 'Vue' },
                { color: '#F6F8FB', key: 'stencil', name: 'Stencil' },
                { color: '#F0F8FD', key: 'jquery', name: 'jQuery' },
                { color: '#F6F1FD', key: 'bootstrap', name: 'Bootstrap' },
                { color: '#F0F6FF', key: 'ionic', name: 'Ionic' },
                { color: '#EDF9FF', key: 'material-ui', name: 'Material UI' },
                { color: '#FFF5F3', key: 'framework-7', name: 'Framework7' },
                { color: '#F0F7FC', key: 'quasar', name: 'Quasar' },
                { color: '#FEF8EF', key: 'angular-material', name: 'Angular Material' },
              ].map(f => (
                <Col md={3} sm={3} xs={6} cols={12} key={f.key} style={{ background: f.color }} class="framework">
                  <img src={`/assets/img/landing/framework-${f.key}.png`} alt={f.name} />
                </Col>
              ))}
            </Grid>
          </section>
        </ResponsiveContainer>
        <pre-footer />
        <newsletter-signup />
        <capacitor-site-footer />
      </Host>
    );
  }
}

const GettingStartedSection = ({ selectedCodeTab, setSelectedCodeTab}: { selectedCodeTab: string, setSelectedCodeTab: (tab: string) => void }) => (
  <section class="section--getting-started">
    <ResponsiveContainer>
      <hgroup>
        <Heading level={2}>はじめるのは簡単です。</Heading>
      </hgroup>
      <Grid class="section--getting-started__step">
        <Col cols={1}>01</Col>
        <Col md={5} sm={5} xs={5} cols={12}>
          <Heading level={3}>Capacitorを既存アプリに導入します。</Heading>
        </Col>
        <Col md={6} sm={6} xs={6} cols={12}>
          <code-snippet language="shell-session" code={`
npm install @capacitor/cli @capacitor/core
npx cap init
`}/>
        </Col>
      </Grid>
      <Grid class="section--getting-started__step">
        <Col cols={1}>02</Col>
        <Col md={5} sm={5} xs={5} cols={12}>
          <Heading level={3}>ターゲットにするネイティブプラットフォームをインストールします。</Heading>
          <img src="/assets/img/landing/apple.png" alt="Apple" class="apple" />
          <img src="/assets/img/landing/android.png" alt="Android" class="android" />
        </Col>
        <Col md={6} sm={6} xs={6} cols={12}>
          <code-snippet language="shell-session" code={`
npx cap add ios
npx cap add android
`} />
        </Col>
      </Grid>
      <Grid class="section--getting-started__step">
        <Col cols={1}>03</Col>
        <Col md={5} sm={5} xs={5} cols={12}>
          <Heading level={3}>ネイティブとウェブの両方でAPIにアクセスして、機能を拡張します。</Heading>
        </Col>
        <Col md={6} sm={6} xs={6} cols={12}>
          <Tabs>
            <TabBar>
              <TabBarButton
                selected={selectedCodeTab === 'notifications'}
                tabSelect={() => setSelectedCodeTab('notifications')}>
                通知
              </TabBarButton>
              <TabBarButton
                selected={selectedCodeTab === 'geolocation'}
                tabSelect={() => setSelectedCodeTab('geolocation')}>
                位置情報
              </TabBarButton>
              <TabBarButton
                selected={selectedCodeTab === 'camera'}
                tabSelect={() => setSelectedCodeTab('camera')}>
                カメラ
              </TabBarButton>
              <TabBarButton
                selected={selectedCodeTab === 'custom'}
                tabSelect={() => setSelectedCodeTab('custom')}>
                カスタム
              </TabBarButton>
            </TabBar>
            <Tab selected={selectedCodeTab === 'notifications'}>
              <code-snippet
                style={{ '--border-radius': '0 0 8px 8px' }}
                language="typescript"
                code={`
import { Plugins } from '@capacitor/core';
const { LocalNotifications } = Plugins;

LocalNotifications.schedule({
  notifications: [
    {
      title: "On sale",
      body: "Widgets are 10% off. Act fast!",
      id: 1,
      schedule: { at: new Date(Date.now() + 1000 * 5) },
      sound: null,
      attachments: null,
      actionTypeId: "",
      extra: null
    }
  ]
});
`} />
            </Tab>
            <Tab
              selected={selectedCodeTab === 'geolocation'}>
              <code-snippet
                style={{ '--border-radius': '0 0 8px 8px' }}
                language="typescript"
                code={`
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;
// get the users current position
const position = await Geolocation.getCurrentPosition();

// grab latitude & longitude
const latitude = position.coords.latitude;
const longitude = position.coords.longitude;
`} />
            </Tab>
            <Tab
              selected={selectedCodeTab === 'camera'}>
              <code-snippet
                style={{ '--border-radius': '0 0 8px 8px' }}
                language="typescript"
                code={`
import { Plugins } from '@capacitor/core';
const { Camera } = Plugins;
// Take a picture or video, or load from the library
const picture = await Camera.getPicture({
  encodingType: this.camera.EncodingType.JPEG
});
`} />
            </Tab>
            <Tab
              selected={selectedCodeTab === 'custom'}>
              <code-snippet
                style={{ '--border-radius': '0 0 8px 8px' }}
                language="typescript"
                code={`
import Foundation
import Capacitor

// Custom platform code, easily exposed to your web app
// through Capacitor plugin APIs. Build APIs that work
// across iOS, Android, and the web!
@objc(MyAwesomePlugin)
public class MyAwesomePlugin: CAPPlugin {

  @objc public func doNative(_ call: CAPPluginCall) {
    let alert = UIAlertController(title: "Title", message: "Please Select an Option", preferredStyle: .actionSheet)

    // ....
  }
}
`} />
            </Tab>
          </Tabs>
        </Col>
      </Grid>
    </ResponsiveContainer>
  </section>
)

const MetaHead = () => (
  <Helmet>
    <title>Capacitor: Webアプリのためのネイティブなクロスプラットフォームライブラリ</title>
    <meta
      name="description"
      content={'Build iOS, Android, and Progressive Web Apps with HTML, CSS, and JavaScript'}
    />
    <meta
      property="og:description"
      content="Build iOS, Android, and Progressive Web Apps with HTML, CSS, and JavaScript"
    />
    <meta property="og:site_name" content="Capacitor" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@capacitorjs" />
    <meta name="twitter:creator" content="capacitorjs" />
    <meta name="twitter:title" content="Build cross-platform apps with web technologies" />
    <meta name="twitter:description" content="Build cross-platform apps with web technologies" />
    <meta name="twitter:image" content="https://capacitorjs.jp/assets/img/og.png" />
    <meta property="og:image" content="https://capacitorjs.jp/assets/img/og.png" />
    <meta property="og:url" content="https://capacitorjs.jp/" />
  </Helmet>
)
