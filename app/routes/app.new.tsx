import {
    Page,
    Layout,
    LegacyCard,
    ResourceList,
    Thumbnail,
    Text,
    Box,
    SkeletonBodyText,
    BlockStack,
    Icon,
    Button,
    Card,
    FooterHelp,
    Link,
    MediaCard,
    VideoThumbnail,
  } from '@shopify/polaris';
  import {
  
    PlusCircleIcon,
    CheckIcon,
    XIcon,
  } from '@shopify/polaris-icons';
  import React from 'react';
  
  export default function New() {
    return (
      <Page title="Νέα">
  
        <MediaCard
          title="Προσεχώς: Essential Plan"
          primaryAction={{
            content: 'Μάθετε Περισσότερα',
            onAction: () => {
              window.open("https://5minuteslogo.com/pages/apps", '_blank');
            },
          }}
          description="Αποκτήστε τη δυνατότητα να προσαρμόσετε τη φόρμα σας ώστε να ταιριάζει απόλυτα με την επωνυμία σας. Ειδικά σχεδιασμένο για άψογη ενσωμάτωση, το Essential Πακέτο είναι το επόμενο βήμα προς μια προσωποποιημένη εμπειρία."
  
        >
          <img
            alt=""
            width="100%"
            height="100%"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            src="https://cdn.shopify.com/s/files/1/0646/9753/2585/files/Form1.png?v=1707508765"
          />
        </MediaCard>
        <MediaCard
          title="Συμβατότητα Τρέχουσας Φόρμας"
          primaryAction={{
            content: 'Δείτε Περισσότερα',
            onAction: () => {
              window.open("https://5minuteslogo.com/pages/apps", '_blank');
            },
          }}
          description="Προς το παρόν, η εφαρμογή μας λειτουργεί μόνο με καλάθια τύπου 'Page', αυξάνοντας την αποδοτικότητα του καταστήματός σας. Εργαζόμαστε ενεργά για να επεκτείνουμε τη συμβατότητα σε καλάθια τύπου 'Drawer', διευρύνοντας τις δυνατότητές σας."
  
        >
          <img
            alt=""
            width="100%"
            height="100%"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            src="https://cdn.shopify.com/s/files/1/0646/9753/2585/files/Cart1.png?v=1707508765"
          />
        </MediaCard>
        <MediaCard
  
          title="Premium Plan: Έρχεται Σύντομα"
          primaryAction={{
            content: 'Ενημερωθείτε',
            onAction: () => {
              window.open("https://5minuteslogo.com/pages/apps", '_blank');
            },
          }}
          description="Αναμένετε την κυκλοφορία του Premium Πακέτου μας, σχεδιασμένο για να ενσωματώσει τη φόρμα απευθείας στη διαδικασία του checkout. Αναβαθμίστε την εμπειρία χρήστη εξασφαλίζοντας μια ομαλή και γρήγορη διαδικασία πληρωμής για κάθε πελάτη."
  
        >
          <img
            alt=""
            width="100%"
            height="100%"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            src="https://cdn.shopify.com/s/files/1/0646/9753/2585/files/Form.png?v=1707508764"
          />
        </MediaCard>
      </Page>
    );
  }
  