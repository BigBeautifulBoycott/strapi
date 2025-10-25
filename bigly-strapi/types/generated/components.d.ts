import type { Schema, Struct } from '@strapi/strapi';

export interface CommonAddress extends Struct.ComponentSchema {
  collectionName: 'components_common_addresses';
  info: {
    displayName: 'Address';
    icon: 'pin';
  };
  attributes: {
    city: Schema.Attribute.String;
    country: Schema.Attribute.String & Schema.Attribute.DefaultTo<'US'>;
    line1: Schema.Attribute.String;
    line2: Schema.Attribute.String;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Main'>;
    postal_code: Schema.Attribute.String;
    state: Schema.Attribute.Enumeration<
      [
        'Alabama',
        'Alaska',
        'American Samoa',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'District of Columbia',
        'Florida',
        'Georgia',
        'Guam',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Northern Mariana Islands',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Puerto Rico',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virginia',
        'Virgin Islands',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
      ]
    >;
  };
}

export interface CommonGeoPoint extends Struct.ComponentSchema {
  collectionName: 'components_common_geo_points';
  info: {
    displayName: 'Geo Point';
    icon: 'pin';
  };
  attributes: {
    lat: Schema.Attribute.Decimal;
    lng: Schema.Attribute.Decimal;
  };
}

export interface CommonLink extends Struct.ComponentSchema {
  collectionName: 'components_common_links';
  info: {
    description: 'Generic external link';
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    kind: Schema.Attribute.Enumeration<
      [
        'website',
        'rsvp',
        'livestream',
        'discord',
        'tiktok',
        'twitter',
        'facebook',
        'instagram',
        'youtube',
        'other',
      ]
    > &
      Schema.Attribute.DefaultTo<'website'>;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonSocialProfile extends Struct.ComponentSchema {
  collectionName: 'components_common_social_profiles';
  info: {
    description: 'Social account or profile URL';
    displayName: 'Social Profile';
    icon: 'twitter';
  };
  attributes: {
    handle: Schema.Attribute.String;
    platform: Schema.Attribute.Enumeration<
      [
        'website',
        'twitter',
        'facebook',
        'instagram',
        'linkedin',
        'github',
        'tiktok',
        'bluesky',
        'youtube',
        'reddit',
        'other',
      ]
    > &
      Schema.Attribute.DefaultTo<'other'>;
    url: Schema.Attribute.String;
  };
}

export interface CommonSource extends Struct.ComponentSchema {
  collectionName: 'components_common_sources';
  info: {
    description: 'Evidence/source link';
    displayName: 'Source';
    icon: 'link';
  };
  attributes: {
    archived_url: Schema.Attribute.String;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface EventEvidenceItem extends Struct.ComponentSchema {
  collectionName: 'components_event_evidence_items';
  info: {
    description: 'Evidence attached to an event';
    displayName: 'Evidence Item';
    icon: 'attachment';
  };
  attributes: {
    caption: Schema.Attribute.String;
    kind: Schema.Attribute.Enumeration<
      ['image', 'screenshot', 'article', 'post', 'document', 'video', 'other']
    > &
      Schema.Attribute.DefaultTo<'article'>;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    url: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SubjectProfile extends Struct.ComponentSchema {
  collectionName: 'components_subject_profiles';
  info: {
    displayName: 'Subject Profile';
    icon: 'user';
  };
  attributes: {
    hq_country: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images'>;
    tagline: Schema.Attribute.String;
    ticker: Schema.Attribute.String;
    website: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.address': CommonAddress;
      'common.geo-point': CommonGeoPoint;
      'common.link': CommonLink;
      'common.social-profile': CommonSocialProfile;
      'common.source': CommonSource;
      'event.evidence-item': EventEvidenceItem;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'subject.profile': SubjectProfile;
    }
  }
}
