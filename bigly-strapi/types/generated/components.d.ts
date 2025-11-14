import type { Schema, Struct } from '@strapi/strapi';

export interface ContactAddressss extends Struct.ComponentSchema {
  collectionName: 'components_contact_addresssses';
  info: {
    displayName: 'Address';
  };
  attributes: {
    address_1: Schema.Attribute.String;
    address_2: Schema.Attribute.String;
    attention: Schema.Attribute.String;
    city: Schema.Attribute.String;
    country: Schema.Attribute.Enumeration<
      ['United States', 'Canada', 'Mexico', 'United Kingdom', 'Sealand']
    >;
    note: Schema.Attribute.String;
    postal_code: Schema.Attribute.String;
    private: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
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
    type: Schema.Attribute.Enumeration<
      [
        'Headquarters',
        'Office',
        'Storefront',
        'Warehouse',
        'Facility',
        'Home',
        'Event',
        'P.O. Box',
        'Investor',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Headquarters'>;
    why_private: Schema.Attribute.String;
  };
}

export interface ContactEmail extends Struct.ComponentSchema {
  collectionName: 'components_contact_emails';
  info: {
    displayName: 'Email';
    icon: 'envelop';
  };
  attributes: {
    email: Schema.Attribute.Email & Schema.Attribute.Required;
    note: Schema.Attribute.String;
    private: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    type: Schema.Attribute.Enumeration<
      ['Main', 'Support', 'Investor', 'Leadership', 'Press/Media', 'Other']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Main'>;
    why_private: Schema.Attribute.String;
  };
}

export interface ContactPhone extends Struct.ComponentSchema {
  collectionName: 'components_contact_phones';
  info: {
    displayName: 'Phone';
    icon: 'phone';
  };
  attributes: {
    note: Schema.Attribute.String;
    phone_number: Schema.Attribute.String & Schema.Attribute.Required;
    private: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    type: Schema.Attribute.Enumeration<
      ['Main', 'Support', 'Investor', 'Internal', 'Leadership', 'Media/Press']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Main'>;
    why_private: Schema.Attribute.String;
  };
}

export interface ContactSocialProfile extends Struct.ComponentSchema {
  collectionName: 'components_contact_social_profiles';
  info: {
    displayName: 'Social Profile';
    icon: 'stack';
  };
  attributes: {
    note: Schema.Attribute.String;
    platform: Schema.Attribute.Enumeration<
      [
        'TikTok',
        'Instagram',
        'LinkedIn',
        'Facebook',
        'Twitter',
        'BlueSky',
        'YouTube',
        'TruthSocial',
        'Pinterest',
      ]
    > &
      Schema.Attribute.Required;
    private: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    type: Schema.Attribute.Enumeration<
      ['Main', 'Support', 'Leadership', 'Developer', 'Internal Team']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Main'>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    why_private: Schema.Attribute.String;
  };
}

export interface ContactWebsite extends Struct.ComponentSchema {
  collectionName: 'components_contact_websites';
  info: {
    displayName: 'Website';
  };
  attributes: {
    private: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    type: Schema.Attribute.Enumeration<['Main', 'Investor', 'Contact']>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    why_private: Schema.Attribute.String;
  };
}

export interface PagesContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_pages_contact_infos';
  info: {
    displayName: 'Contact Info';
  };
  attributes: {
    email: Schema.Attribute.Email &
      Schema.Attribute.DefaultTo<'media@bigbeautifulboycott.us'>;
    Name: Schema.Attribute.String & Schema.Attribute.Required;
    Title: Schema.Attribute.String;
  };
}

export interface PagesHowTo extends Struct.ComponentSchema {
  collectionName: 'components_pages_how_tos';
  info: {
    displayName: 'Action Items';
  };
  attributes: {
    Description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 300;
        minLength: 110;
      }>;
    Title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    Type: Schema.Attribute.Enumeration<['yes', 'no', 'maybe', 'note']>;
  };
}

export interface PagesReasoning extends Struct.ComponentSchema {
  collectionName: 'components_pages_reasonings';
  info: {
    displayName: 'Reasoning';
  };
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    heading: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    Source: Schema.Attribute.Component<'shared.source', true>;
  };
}

export interface SharedEvaluation extends Struct.ComponentSchema {
  collectionName: 'components_shared_evaluations';
  info: {
    displayName: 'Evaluation';
    icon: 'crown';
  };
  attributes: {
    rating: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<3>;
    reasoning_tags: Schema.Attribute.Relation<
      'oneToMany',
      'api::reasoning-tag.reasoning-tag'
    >;
    sentiment: Schema.Attribute.Enumeration<['good', 'bad']> &
      Schema.Attribute.Required;
    summary: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'code';
  };
  attributes: {
    archive_url: Schema.Attribute.String;
    ariaLabel: Schema.Attribute.String;
    iconName: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    tracking: Schema.Attribute.JSON;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedPolicySection extends Struct.ComponentSchema {
  collectionName: 'components_shared_policy_sections';
  info: {
    displayName: 'Policy Section';
    icon: 'book';
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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
    canonicalUrl: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
    structuredData: Schema.Attribute.JSON;
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

export interface SharedSource extends Struct.ComponentSchema {
  collectionName: 'components_shared_sources';
  info: {
    displayName: 'Source';
  };
  attributes: {
    archive_url: Schema.Attribute.String;
    notes: Schema.Attribute.Text;
    published_date: Schema.Attribute.Date;
    publisher: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      [
        'News Article',
        'Official Document',
        'Corporate Document',
        'Social Media',
        'Watchdog',
      ]
    >;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiButton extends Struct.ComponentSchema {
  collectionName: 'components_ui_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    link: Schema.Attribute.Component<'shared.link', false> &
      Schema.Attribute.Required;
    size: Schema.Attribute.Enumeration<['small', 'medium', 'large']>;
    variant: Schema.Attribute.Enumeration<['primary', 'ghost']> &
      Schema.Attribute.Required;
  };
}

export interface UiFooterSection extends Struct.ComponentSchema {
  collectionName: 'components_ui_footer_sections';
  info: {
    displayName: 'Footer Section';
    icon: 'arrowDown';
  };
  attributes: {
    link: Schema.Attribute.Component<'shared.link', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiNavItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_nav_items';
  info: {
    displayName: 'Nav Item';
  };
  attributes: {
    children: Schema.Attribute.Component<'shared.link', true>;
    link: Schema.Attribute.Component<'shared.link', false> &
      Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact.addressss': ContactAddressss;
      'contact.email': ContactEmail;
      'contact.phone': ContactPhone;
      'contact.social-profile': ContactSocialProfile;
      'contact.website': ContactWebsite;
      'pages.contact-info': PagesContactInfo;
      'pages.how-to': PagesHowTo;
      'pages.reasoning': PagesReasoning;
      'shared.evaluation': SharedEvaluation;
      'shared.link': SharedLink;
      'shared.media': SharedMedia;
      'shared.policy-section': SharedPolicySection;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.source': SharedSource;
      'ui.button': UiButton;
      'ui.footer-section': UiFooterSection;
      'ui.nav-item': UiNavItem;
    }
  }
}
