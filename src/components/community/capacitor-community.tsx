import { Component, Host, h } from '@stencil/core';
import { Heading, Paragraph, Grid, Col, ResponsiveContainer } from '@ionic-internal/ionic-ds';

@Component({
  tag: 'capacitor-community',
  styleUrl: 'capacitor-community.scss',
  scoped: true,
})
export class CapacitorCommunity {

  render() {
    return (
      <Host>
        <ResponsiveContainer>
          <hgroup>
            <Heading level={1}>コミュニティ</Heading>
            <Paragraph>
              Capacitorは、情熱的なコミュニティを持つ大規模で成長中のプロジェクトです。フォーラム、Capacitor Community org、およびTwitterを通じて、Capacitorチームやその他の助けになるコミュニティメンバーと交流してください。
            </Paragraph>
          </hgroup>
          <Grid>
            <Col md={4} sm={4} xs={4} cols={12}>
              <a href="https://github.com/ionic-team/capacitor/discussions">
                <img src="/assets/img/community/support-community-forum.png" alt="GitHub Discussions" />
              </a>
              <Heading level={2}>GitHub Discussions</Heading>
              <Paragraph>
                コミュニティに参加して、新機能について話し合ったり、質問をしたり、他の人が始めるのを手伝ったりしてください。
              </Paragraph>
            </Col>
            <Col md={4} sm={4} xs={4} cols={12}>
              <a href="https://github.com/capacitor-community">
                <img src="/assets/img/community/support-community.png" alt="Community Organization" />
              </a>
              <Heading level={2}>Community Organization</Heading>
              <Paragraph>
                厳選されたコミュニティプラグインのリストを表示して、アプリをさらに強化します。音楽コントロール、高度なネイティブHTTPといったプラグインがあります。
              </Paragraph>
            </Col>
            <Col md={4} sm={4} xs={4} cols={12}>
              <a href="https://twitter.com/capacitorjs">
                <img src="/assets/img/community/support-twitter.png" alt="Capacitor Twitter" />
              </a>
              <Heading level={2}>Capacitor Twitter</Heading>
              <Paragraph>
                Twitterをフォローして、最新のニュースを入手し、コミュニティーに参加してください
              </Paragraph>
            </Col>
          </Grid>
        </ResponsiveContainer>
        <pre-footer />
        <newsletter-signup />
        <capacitor-site-footer />
      </Host>
    );
  }

}
