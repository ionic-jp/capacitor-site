import { PrismicRichText, ResponsiveContainer } from '@ionic-internal/ionic-ds';
import { h, Prop, Component, Host, getAssetPath } from '@stencil/core';
import { slugify } from 'src/utils/common';

import { trackClick } from '../../utils/analytics';

// interface AnnouncementBarProps {
//   prismicData: {
//     button_text: string;
//     text: any;
//     link: {
//       url: string;
//     };
//     theme: string;
//   };
// }

@Component({
  tag: 'announcement-bar',
  styleUrl: 'announcement-bar.scss',
  assetsDirs: ['assets-announcement-bar'],
  scoped: true,
})
export class AnnouncementBar {
  @Prop() prismicData;

  render() {
    const {
      link: { url },
      button_text,
      button_arrow,
      text,
      theme,
      left_image,
    } = Object.assign({
      link: {
        url: 'https://ionic-jp.connpass.com/event/251256/',
      },
      button_text: '参加登録',
      button_arrow: true,
      text: [
        {
          spans: [],
          text: '新宿駅徒歩圏内の好立地での開催。2022/07/09(土)、東京開催。',
          type: 'paragraph',
        },
      ],
      left_image: {
        url: undefined,
      },
      theme: 'Ioniconf 2022',
    });

    const themeSlug = slugify(theme);

    return (
      <Host
        class={{
          'ui-announcement-bar': true,
          [`ui-announcement-bar--${themeSlug}`]: Boolean(theme),
        }}
        style={{
          '--asset-path': `url('${getAssetPath(
            `./assets-announcement-bar/bg-${themeSlug}.png`,
          )}')`,
        }}
      >
        <a
          href={url}
          target="_blank"
          onClick={event => trackClick('Capacitor Announcement Bar CTA', event)}
          rel="noopener"
          class="link-wrapper"
        >
          <ResponsiveContainer>
            {left_image.url && (
              <img
                src={left_image.url}
                width={left_image.dimensions.width / 2}
                height={left_image.dimensions.height / 2}
                alt={left_image.alt}
              />
            )}
            {!left_image.url && (
              <h1>
                Ionic Meetup
                <br />
                #22 Tokyo
              </h1>
            )}
            <PrismicRichText richText={text} />
            <button>
              {button_text}
              {button_arrow && <span class="arrow"> -&gt;</span>}
            </button>
          </ResponsiveContainer>
        </a>
      </Host>
    );
  }
}
