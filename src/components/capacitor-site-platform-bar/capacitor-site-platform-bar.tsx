import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'capacitor-site-platform-bar',
  styleUrl: 'capacitor-site-platform-bar.scss',
})
export class PlatformBar implements ComponentInterface {
  render() {
    return (
      <a
        class="platform-bar"
        href="https://marketplace.visualstudio.com/items?itemName=ionic.ionic"
        target="_blank"
        rel="noopener"
      >
        <svg
          width="36"
          height="36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#a)">
            <rect x="4" y="1" width="28" height="28" rx="8" fill="url(#b)" />
          </g>
          <g filter="url(#c)">
            <path
              d="M18 7.83a7.21 7.21 0 1 0 7.22 7.2l-.02-.62c.88-.1 2.3-.4 2.3-.4v1.02A9.49 9.49 0 0 1 18 24.5a9.49 9.49 0 0 1-9.5-9.47v-1.11S13.3 5.55 18 5.55c2.28 0 4.38.8 6.02 2.14-.78.23-1.42.8-1.73 1.54A7.2 7.2 0 0 0 18 7.83Z"
              fill="#77BDFF"
            />
          </g>
          <path
            d="M18 6.77a7.21 7.21 0 1 0 7.22 7.2l-.02-.61c.88-.1 1.64-.6 2.1-1.3A9.48 9.48 0 0 1 18 23.44a9.49 9.49 0 0 1-9.5-9.48 9.49 9.49 0 0 1 15.52-7.33c-.78.23-1.42.8-1.73 1.54A7.2 7.2 0 0 0 18 6.78Z"
            fill="#fff"
          />
          <path
            d="M27.3 12.05a9.4 9.4 0 0 0-.33-1.2 2.71 2.71 0 0 1-2.04 1.09c.13.46.22.93.26 1.42.89-.1 1.65-.6 2.12-1.3Z"
            fill="#fff"
          />
          <g filter="url(#d)">
            <path
              d="M18 19.1a4.16 4.16 0 0 0 4.16-4.14v-.98s-2.37-3.16-4.16-3.16c-1.8 0-4.16 3.16-4.16 3.16v.98A4.16 4.16 0 0 0 18 19.1Z"
              fill="#77BDFF"
            />
          </g>
          <path
            d="M18 18.12a4.16 4.16 0 0 0 4.16-4.15 4.16 4.16 0 0 0-8.32 0A4.16 4.16 0 0 0 18 18.12Z"
            fill="#fff"
          />
          <g filter="url(#e)">
            <path
              d="M24.24 11.12c1.14 0 2.07-.93 2.07-2.08v-.76s-1.25-1.3-2.07-1.3c-.93 0-2.08 1.43-2.08 1.43v.63c0 1.15.93 2.08 2.08 2.08Z"
              fill="#77BDFF"
            />
          </g>
          <path
            d="M24.24 10.42a2.08 2.08 0 1 0 0-4.15 2.08 2.08 0 0 0 0 4.15Z"
            fill="#fff"
          />
          <defs>
            <filter
              id="a"
              x="0"
              y="0"
              width="36"
              height="36"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="s-rGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="3" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_4096_11501"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_4096_11501"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-1" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="shape" result="effect2_innerShadow_4096_11501" />
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
              <feBlend
                in2="effect2_innerShadow_4096_11501"
                result="effect3_innerShadow_4096_11501"
              />
            </filter>
            <filter
              id="c"
              x="7.5"
              y="5.55"
              width="21"
              height="20.95"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="s-rGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation=".5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.364498 0 0 0 0 0.816667 0 0 0 0.6 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_4096_11501"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_4096_11501"
                result="shape"
              />
            </filter>
            <filter
              id="d"
              x="12.84"
              y="10.82"
              width="10.31"
              height="10.29"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="s-rGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation=".5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.390534 0 0 0 0 0.875 0 0 0 0.5 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_4096_11501"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_4096_11501"
                result="shape"
              />
            </filter>
            <filter
              id="e"
              x="21.16"
              y="6.97"
              width="6.16"
              height="6.14"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="s-rGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation=".5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.390534 0 0 0 0 0.875 0 0 0 0.5 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_4096_11501"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_4096_11501"
                result="shape"
              />
            </filter>
            <linearGradient
              id="b"
              x1="18"
              y1="1"
              x2="18"
              y2="29"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0096FF" />
              <stop offset="1" stop-color="#0071FF" />
            </linearGradient>
          </defs>
        </svg>
        <span class="text">
          Our new <em>VS Code extension</em> is the fastest and easiest way to
          build Ionic apps
        </span>
        <button>
          Try it {'  '} <ion-icon name="arrow-forward-outline"></ion-icon>
        </button>
      </a>
    );
  }
}
