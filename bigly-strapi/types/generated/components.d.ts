import type { Schema, Struct } from '@strapi/strapi';

export interface CoreIdentifier extends Struct.ComponentSchema {
  collectionName: 'components_core_identifiers';
  info: {
    displayName: 'Identifier';
    icon: 'information';
  };
  attributes: {
    scheme: Schema.Attribute.Enumeration<
      [
        'TICKER',
        'SEC_CIK',
        'EIN',
        'FEC_COMMITTEE',
        'FEC_CANDIDATE',
        'OPENCORPORATES',
        'WIKIDATA',
        'OTHER',
      ]
    > &
      Schema.Attribute.Required;
    text: Schema.Attribute.String;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CoreLinks extends Struct.ComponentSchema {
  collectionName: 'components_core_links';
  info: {
    displayName: 'Links';
    icon: 'link';
  };
  attributes: {
    BlueSky: Schema.Attribute.String;
    Crunchbase: Schema.Attribute.String;
    Facebook: Schema.Attribute.String;
    GitHub: Schema.Attribute.String;
    Instagram: Schema.Attribute.String;
    LinkedIn: Schema.Attribute.String;
    TikTok: Schema.Attribute.String;
    Twitter: Schema.Attribute.String;
    Website: Schema.Attribute.String;
    Wikipedia: Schema.Attribute.String;
    YouTube: Schema.Attribute.String;
  };
}

export interface CoreLocation extends Struct.ComponentSchema {
  collectionName: 'components_core_locations';
  info: {
    displayName: 'Location';
    icon: 'pinMap';
  };
  attributes: {
    City: Schema.Attribute.String;
    Country: Schema.Attribute.String & Schema.Attribute.DefaultTo<'US'>;
    Name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Main'>;
    State: Schema.Attribute.Enumeration<
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
    Street_1: Schema.Attribute.String;
    Street_2: Schema.Attribute.String;
    Zip: Schema.Attribute.String;
  };
}

export interface CoreRating extends Struct.ComponentSchema {
  collectionName: 'components_core_ratings';
  info: {
    displayName: 'rating';
    icon: 'bold';
  };
  attributes: {
    public_rating: Schema.Attribute.Decimal;
    public_rating_reason: Schema.Attribute.String;
    public_rating_updated_at: Schema.Attribute.DateTime;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'core.identifier': CoreIdentifier;
      'core.links': CoreLinks;
      'core.location': CoreLocation;
      'core.rating': CoreRating;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
