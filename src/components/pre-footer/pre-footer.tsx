import { Component, Host, h } from '@stencil/core';
import { Grid, Col, ResponsiveContainer, Heading } from '@ionic-internal/sites-shared';

@Component({
  tag: 'pre-footer',
  styleUrl: 'pre-footer.scss',
  scoped: true,
})
export class PreFooter {

  render() {
    return (
      <Host>
        <ResponsiveContainer>
          <Grid>
            <Col md={6} sm={6} xs={12} cols={12}>
              <a href="/docs">
                <img src="/assets/img/docs.png" alt="Installation Guide" />
                <Heading level={4}>インストールガイド <span class="arrow">-&gt;</span></Heading>
                <p>
                  Capacitorをインストールしてアプリを構築する方法を学びます
                </p>
              </a>
            </Col>
            <Col md={6} sm={6} xs={12} cols={12}>
              <a href="/docs/apis">
                <img src="/assets/img/native-apis.png" alt="Explore the Native Plugins" />
                <Heading level={4}>ネイティブプラグインを探す <span class="arrow">-&gt;</span></Heading>
                <p>
                  すべてのCapacitorアプリで利用可能なネイティブプラグインを探します
                </p>
              </a>
            </Col>
          </Grid>
        </ResponsiveContainer>
      </Host>
    );
  }

}
