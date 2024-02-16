import { useEffect, useState } from "react";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useActionData, useNavigation, useSubmit } from "@remix-run/react";
import {
  Page,
  Layout,
  Text,
  Card,
  Button,
  BlockStack,
  Box,
  List,
  Link,
  InlineStack,
  PageActions,
  MediaCard,
  Banner,
  FooterHelp,
  VideoThumbnail,
  LegacyCard,
} from "@shopify/polaris";
import { authenticate } from "../shopify.server";
import { useNavigate } from 'react-router-dom';



export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);

  return null;
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const { admin } = await authenticate.admin(request);
  const color = ["Red", "Orange", "Yellow", "Green"][
    Math.floor(Math.random() * 4)
  ];
}
export default function Index() {
  const [showBanner, setShowBanner] = useState(true);
  const handleVideoClick2 = () => {
    // Navigate to the video page
    window.open('https://5minuteslogo.com/pages/apps#section-template--21990251495765__custom_liquid_eErFET-padding', '_blank');
  };

  return (

    <Page title="Πίνακας Ελέγχου" primaryAction={<Button url="/app/support" variant="primary">Υποστήριξη</Button>}>
      <Layout>
        <Layout.Section>
          <Banner
            title="Λειτουργεί μόνο στο καλάθι αγορών"

            tone="critical"
          >
            <p>
            Η εφαρμογή μας υποστηρίζει προς το παρόν μόνο καλάθια τύπου 'page'. Βεβαιωθείτε ότι οι ρυθμίσεις του καλαθιού σας είναι σωστές για να αποφύγετε οποιοδήποτε πρόβλημα. Εργαζόμαστε για να επεκτείνουμε τη συμβατότητα και εκτιμούμε την κατανόησή σας.            </p>
          </Banner>
          {showBanner && (
            <Banner title="Έρχεται σύντομα και στο Ckeckout" onDismiss={() => setShowBanner(false)}>
              <p>Νέα ενημέρωση σύντομα! Είμαστε κοντά στην εκκίνηση της νέας μας φόρμας στο Checkout, ανεβάζοντας την εμπειρία σας και των πελατών σας. Μείνετε συντονισμένοι.</p>
            </Banner>
          )}
        </Layout.Section>
        <Layout.Section>
          <MediaCard
            title="Οδηγός Εγκατάστασης"
            primaryAction={{
              content: 'Δείτε Περισσότερα',
              url: "/app/guide"
            }}
            description={`Δείτε τον οδηγό μας σχετικά με το πώς να εγκαταστήσετε το AFM_Filler στο κατάστημα σας.`}

          >
            <img
              alt=""
              width="100%"
              height="100%"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              src="https://cdn.shopify.com/s/files/1/0646/9753/2585/files/How_Works.png?v=1707650074"
            />
          </MediaCard>
          
          <MediaCard
            title="Δείτε το AFM_Filler στη πράξη"
            primaryAction={{
              content: 'Δείτε το Video',
              onAction: () => {
                window.open("https://5minuteslogo.com/pages/apps#section-template--21990251495765__custom_liquid_eErFET-padding", '_blank');
              },
            }}
            description={`Παρακολουθήστε το ενημερωτικό μας βίντεο για να εξοικειωθείτε με τη λειτουργία και τα οφέλη του AFM_Filler. `}

          >
            <VideoThumbnail
              videoLength={80}
              thumbnailUrl="https://cdn.shopify.com/s/files/1/0646/9753/2585/files/How_Works2.png?v=1707650640"
              onClick={handleVideoClick2}

            />
          </MediaCard>

        </Layout.Section>
        <Layout.Section variant="oneThird">
          <LegacyCard title="Αξιολογήστε μας">
            <LegacyCard.Section>
              <p>Προσθέστε την αξιολόγησή σας για να συμβάλετε στη συνεχή βελτίωση και εξέλιξη του AFM_Filler.</p>
            </LegacyCard.Section>
            <LegacyCard.Section>
              <Button onClick={() => window.open("https://5minuteslogo.com/pages/apps#section-template--21990251495765__custom_liquid_eErFET-padding", "_blank")}>Give Feedback</Button>
            </LegacyCard.Section>
          </LegacyCard>
          <LegacyCard title="Νέα" subdued>
            <LegacyCard.Section>
              <p>Ενημερωθείτε για τις επερχόμενες λειτουργίες και ενημερώσεις που θα ενισχύσουν την εμπειρία σας.</p>
            </LegacyCard.Section>
            <LegacyCard.Section>
              <Button onClick={() => window.open("https://5minuteslogo.com/pages/apps#section-template--21990251495765__custom_liquid_eErFET-padding", "_blank")}>See What's Coming</Button>
            </LegacyCard.Section>
          </LegacyCard>
        </Layout.Section>
      </Layout>

    </Page>
  );
}
