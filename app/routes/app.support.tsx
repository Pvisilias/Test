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
    Collapsible,
    TextContainer,
    LegacyStack,
    Divider,
} from '@shopify/polaris';
import {
    PlusIcon,
    PlusCircleIcon,
    CheckIcon,
    XIcon,
} from '@shopify/polaris-icons';
import { useState, useCallback } from 'react';

export default function Support() {
    const [open, setOpen] = useState<string | null>(null);

    const handleToggle = useCallback((id: string) => {
        setOpen((currentOpen) => (currentOpen === id ? null : id));
    }, []);
    return (
        <Page title="Υποστήριξη">

            <MediaCard
                title="Αναφέρετε ένα Πρόβλημα"
                primaryAction={{
                    content: 'Επικοινωνήστε μαζί μας',
                    onAction: () => {
                        window.open("https://5minuteslogo.com/pages/contact", '_blank');
                    },
                }}
                description="Αντιμετωπίσατε κάποιο πρόβλημα? Ενημερώστε μας για το πώς μπορούμε να σας βοηθήσουμε. Είμαστε πάντα δίπλα σας, έτοιμοι να αντιμετωπίσουμε κάθε πρόκληση μαζί σας. "

            >
                <img
                    alt=""
                    width="100%"
                    height="100%"
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                    src="https://cdn.shopify.com/s/files/1/0646/9753/2585/files/Contact.png?v=1707508806"
                />
            </MediaCard>
            <MediaCard
                title="Μοιραστείτε τις Ιδέες σας"
                primaryAction={{
                    content: 'Μοιραστείτε τώρα',
                    onAction: () => {
                        window.open("https://5minuteslogo.com/pages/contact", '_blank');
                    },
                }}
                description="Λατρεύουμε να ακούμε από τους χρήστες μας! Μοιραστείτε τις καινοτόμες ιδέες σας ή προτάσεις σχετικά με το πώς μπορούμε να κάνουμε την εφαρμογή μας ακόμα καλύτερη."

            >
                <img
                    alt=""
                    width="100%"
                    height="100%"
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                    src="https://cdn.shopify.com/s/files/1/0646/9753/2585/files/feedback2.png?v=1707508764"
                />
            </MediaCard>

            <div style={{ height: '100%', marginTop: '18px', marginBottom: '20px' }}>
                <LegacyCard sectioned>
                    <div style={{ paddingLeft: '0.75rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
                        <Text as="p" variant="headingLg">Συχνές Ερωτήσεις</Text>
                    </div>
                    <LegacyStack vertical>
                        <div style={{ borderTop: '0.0625rem solid #dde0e4', paddingBlockStart: '15px' }}>
                            <Button
                                fullWidth
                                disclosure
                                variant="tertiary"
                                onClick={() => handleToggle('collapsible1')}
                                ariaExpanded={open === 'collapsible1'}
                                ariaControls="collapsible1"
                                textAlign="start"
                            >
                                Λειτουργεί η εφαρμογή με καλάθια τύπου 'Drawer'?
                            </Button>
                        </div>
                        <Collapsible
                            open={open === 'collapsible1'}
                            id="collapsible1"
                            transition={{ duration: '200ms', timingFunction: 'ease-in-out' }}
                            expandOnPrint
                        >

                            <TextContainer>
                                <div style={{ paddingLeft: '0.75rem', paddingBottom: '0.75rem' }}>
                                    <p> Προς το παρόν, η εφαρμογή μας λειτουργεί μόνο για καλάθια τύπου 'Page' και δεν υποστηρίζει καλάθια τύπου 'Drawer'. Εργαζόμαστε ενεργά για να επεκτείνουμε τη συμβατότητά μας περιλαμβάνοντας καλάθια τύπου 'Drawer', στοχεύοντας να προσφέρουμε αυτή τη λειτουργικότητα στο κοντινό μέλλον.</p>
                                </div>
                            </TextContainer>

                        </Collapsible>

                    </LegacyStack>

                    <LegacyStack vertical>
                        <div style={{ borderTop: '0.0625rem solid #dde0e4', paddingBlockStart: '15px' }}>
                            <Button
                                fullWidth
                                disclosure
                                variant="tertiary"
                                onClick={() => handleToggle('collapsible2')}
                                ariaExpanded={open === 'collapsible2'}
                                ariaControls="collapsible2"
                                textAlign="start"
                            >
                                Τι πρέπει να κάνω αν η φόρμα δεν λειτουργεί σωστά?
                            </Button>
                        </div>
                        <Collapsible
                            open={open === 'collapsible2'}
                            id="collapsible2"
                            transition={{ duration: '200ms', timingFunction: 'ease-in-out' }}
                            expandOnPrint
                        >
                            <TextContainer>
                                <div style={{ paddingLeft: '0.75rem', paddingBottom: '0.75rem' }}>
                                    <p>Αν αντιμετωπίσετε οποιοδήποτε πρόβλημα με τη φόρμα, παρακαλούμε πρώτα να ελέγξετε ότι ο τύπος του καλαθιού σας είναι ρυθμισμένος σε 'Page', καθώς η εφαρμογή μας υποστηρίζει προς το παρόν μόνο αυτή τη μορφή. Αν το πρόβλημα επιμένει, μη διστάσετε να αναφέρετε το ζήτημα μέσω της ενότητας 'Αναφορά Προβλήματος' στη σελίδα υποστήριξης. Παρέχετε όσο το δυνατόν περισσότερες λεπτομέρειες για να μας βοηθήσετε να επιλύσουμε το ζήτημά σας γρήγορα.</p>
                                </div>
                            </TextContainer>
                        </Collapsible>

                    </LegacyStack>
                    <LegacyStack vertical>
                        <div style={{ borderTop: '0.0625rem solid #dde0e4', paddingBlockStart: '15px' }}>
                            <Button
                                fullWidth
                                disclosure
                                variant="tertiary"
                                onClick={() => handleToggle('collapsible3')}
                                ariaExpanded={open === 'collapsible3'}
                                ariaControls="collapsible3"
                                textAlign="start"
                            >
                                Μπορώ να χρησιμοποιήσω την εφαρμογή σε πολλαπλά καταστήματα με μία συνδρομή?
                            </Button>
                        </div>
                        <Collapsible
                            open={open === 'collapsible3'}
                            id="collapsible3"
                            transition={{ duration: '200ms', timingFunction: 'ease-in-out' }}
                            expandOnPrint
                        >
                            <TextContainer>
                                <div style={{ paddingLeft: '0.75rem', paddingBottom: '0.75rem' }}>
                                    <p>Κάθε συνδρομή ισχύει για ένα μόνο κατάστημα Shopify. Αν επιθυμείτε να χρησιμοποιήσετε την εφαρμογή μας σε πολλαπλά καταστήματα, θα πρέπει να εγγραφείτε ξεχωριστά για κάθε κατάστημα, ώστε να διασφαλίσετε την ορθή λειτουργία και υποστήριξη.</p>
                                </div>
                            </TextContainer>
                        </Collapsible>

                    </LegacyStack>
                    <LegacyStack vertical>
                        <div style={{ borderTop: '0.0625rem solid #dde0e4', paddingBlockStart: '15px' }}>
                            <Button
                                fullWidth
                                disclosure
                                variant="tertiary"
                                onClick={() => handleToggle('collapsible4')}
                                ariaExpanded={open === 'collapsible4'}
                                ariaControls="collapsible4"
                                textAlign="start"
                            >
                                Υπάρχει εγχειρίδιο χρήσης ή οδηγός για την εφαρμογή?
                            </Button>
                        </div>
                        <Collapsible
                            open={open === 'collapsible4'}
                            id="collapsible4"
                            transition={{ duration: '200ms', timingFunction: 'ease-in-out' }}
                            expandOnPrint
                        >
                            <TextContainer>
                                <div style={{ paddingLeft: '0.75rem', paddingBottom: '0.75rem' }}>
                                    <p>Ναι, παρέχουμε έναν πλήρη οδηγό χρήστη που καλύπτει όλες τις πτυχές της εγκατάστασης και της αποτελεσματικής χρήσης της εφαρμογής. Μπορείτε να βρείτε αυτόν τον οδηγό στην ενότητα 'Οδηγός' της εφαρμογής μας ή στη σελίδα υποστήριξης. Αν έχετε οποιεσδήποτε περαιτέρω ερωτήσεις, η ομάδα υποστήριξής μας είναι πάντα διαθέσιμη να σας βοηθήσει.</p>
                                </div>
                            </TextContainer>
                        </Collapsible>

                    </LegacyStack>
                    <LegacyStack vertical>
                        <div style={{ borderTop: '0.0625rem solid #dde0e4', paddingBlockStart: '15px' }}>
                            <Button
                                fullWidth
                                disclosure
                                variant="tertiary"
                                onClick={() => handleToggle('collapsible5')}
                                ariaExpanded={open === 'collapsible5'}
                                ariaControls="collapsible5"
                                textAlign="start"
                            >
                                Λειτουργεί το AFM_Filler με όλα τα θέματα του Shopify?
                            </Button>
                        </div>
                        <Collapsible
                            open={open === 'collapsible5'}
                            id="collapsible5"
                            transition={{ duration: '200ms', timingFunction: 'ease-in-out' }}
                            expandOnPrint
                        >
                            <TextContainer>
                                <div style={{ paddingLeft: '0.75rem', paddingBottom: '0.75rem' }}>
                                    <p>Ναι, το AFM_Filler είναι σχεδιασμένο για να είναι συμβατό με όλα τα επίσημα θέματα του Shopify. Έχουμε εργαστεί μεθοδικά για να εξασφαλίσουμε αρμονική ενσωμάτωση σε πληθώρα σχεδιάσεων και διαρρυθμίσεων.</p>
                                </div>
                            </TextContainer>
                        </Collapsible>

                    </LegacyStack>
                    <LegacyStack vertical>
                        <div style={{ borderTop: '0.0625rem solid #dde0e4', paddingBlockStart: '15px' }}>
                            <Button
                                fullWidth
                                disclosure
                                variant="tertiary"
                                onClick={() => handleToggle('collapsible6')}
                                ariaExpanded={open === 'collapsible6'}
                                ariaControls="collapsible6"
                                textAlign="start"
                            >
                                Πώς μπορώ να μοιραστώ τις ιδέες ή τις προτάσεις μου για την εφαρμογή?
                            </Button>
                        </div>
                        <Collapsible
                            open={open === 'collapsible6'}
                            id="collapsible6"
                            transition={{ duration: '200ms', timingFunction: 'ease-in-out' }}
                            expandOnPrint
                        >
                            <TextContainer>
                                <div style={{ paddingLeft: '0.75rem', paddingBottom: '0.75rem' }}>
                                    <p>Τιμούμε την αξιλόγηση και τις ιδέες σας! Αν έχετε προτάσεις για τη βελτίωση της εφαρμογής μας ή νέες λειτουργίες που θα θέλατε να δείτε, παρακαλούμε να τις μοιραστείτε μαζί μας μέσω της ενότητας 'Μοιραστείτε τις ιδέες σας'. Η συνεισφορά σας είναι καθοριστική για τη συνεχή μας βελτίωση.</p>
                                </div>
                            </TextContainer>
                        </Collapsible>

                    </LegacyStack>
                    <LegacyStack vertical>
                        <div style={{ borderTop: '0.0625rem solid #dde0e4', paddingBlockStart: '15px' }}>
                            <Button
                                fullWidth
                                disclosure
                                variant="tertiary"
                                onClick={() => handleToggle('collapsible7')}
                                ariaExpanded={open === 'collapsible7'}
                                ariaControls="collapsible7"
                                textAlign="start"

                            >
                                Έχετε κάποιες ερωτήσεις?
                            </Button>
                        </div>
                        <Collapsible
                            open={open === 'collapsible7'}
                            id="collapsible7"
                            transition={{ duration: '200ms', timingFunction: 'ease-in-out' }}
                            expandOnPrint
                        >
                            <TextContainer>
                                <div style={{ paddingLeft: '0.75rem', paddingBottom: '0.75rem' }}>
                                    <p>Εάν έχετε περαιτέρω ερωτήσεις ή χρειάζεστε βοήθεια για κάτι που δεν καλύπτεται στις Συχνές Ερωτήσεις μας, μη διστάσετε να επικοινωνήσετε μαζί μας. Η ομάδα υποστήριξής μας είναι εδώ για να σας βοηθήσει με οποιαδήποτε απορία ή τεχνικό ζήτημα που μπορεί να έχετε. Επικοινωνήστε μαζί μας μέσω της σελίδας υποστήριξης, και θα φροντίσουμε να ανταποκριθούμε άμεσα στις ανάγκες σας.</p>
                                </div>
                            </TextContainer>
                        </Collapsible>

                    </LegacyStack>
                </LegacyCard>
            </div>

        </Page>
    );
}
