import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import logo from "../logo.png"

// Create styles
const styles = StyleSheet.create({
  page: { color: 'black', backgroundColor: '#fff' , height: "1000px", width: "1000px", padding: "0 40px"},
  title: { fontSize: 30, fontFamily: "Times-Bold", marginTop: "50px" },
  line2: { fontSize: 12, marginTop: 60, fontFamily: "Times-Bold"},
  line3: { fontSize: 30, marginTop: 40, marginBottom: 70, fontFamily: "Times-Bold"},
  line4To6: { fontSize: 12, fontFamily: "Times-Bold"},
  line7: { fontSize: 30, fontFamily: "Times-Bold", marginTop: 50, marginBottom: 80},
  line9To10: { fontSize: 12, fontFamily: "Times-Bold"},
  line11: { fontSize: 10, fontFamily: "Times-Bold", marginTop: 60},
  pageNumber: { fontSize: 12, textAlign: "right", fontFamily: "Times-Roman", marginTop: 110, marginRight: 10 },
  section: { color: 'black', textAlign: 'center', margin: 30 },
  logo: { height: "auto", width: "30px", margin: "0px auto", marginTop: "20px" },
  newRoman12: { fontFamily: "Times-Roman", fontSize: 12,  textAlign: "left"},
  newRoman12Bold: { fontFamily: "Times-Bold", fontSize: 12,  textAlign: "left"},
  newRoman14Bold: { fontFamily: "Times-Bold", fontSize: 14,  textAlign: "left"},
  newRoman15Bold: { fontFamily: "Times-Bold", fontSize: 15,  textAlign: "left"},
  newRoman12List: { fontFamily: "Times-Roman", fontSize: 12,  textAlign: "left", marginLeft: 30},
  link: { fontFamily: "Times-Roman", fontSize: 12,  textAlign: "left", color: "#1e90ff"},
  pageOne: { fontSize: 12, fontFamily: "Times-Roman", textAlign: "left", position: "fixed", top: 110},
  pageTwo: { fontSize: 12, fontFamily: "Times-Roman", textAlign: "left", position: "fixed", top: 60},
  pageThree: { fontSize: 12, fontFamily: "Times-Roman", textAlign: "left", position: "fixed", top: 90},
  pageFour: { fontSize: 12, fontFamily: "Times-Roman", textAlign: "left", position: "fixed", top: 300},
  pageFive: { fontSize: 12, fontFamily: "Times-Roman", textAlign: "left", position: "fixed", top: 365},
  Enter: { marginTop: 20 }
});

// Create Document Component
const TenantForm = () => (
  <Document style={styles.page}>
    <Page size="A4" style={styles.page}>
      <Image style={styles.logo} src={logo} />
      <View style={styles.section}>
        <Text style={styles.title}>TENANCY CONTRACT</Text>
        <Text style={styles.line2}>The Agreement Made on 12 day of August, 2022</Text>
        <Text style={styles.line3}>BETWEEN</Text>
        <Text style={styles.line4To6}> Gentle Property Management Ltd.  who is the LESSOR </Text>
        <Text style={styles.line4To6}> Kirill Sukhikh who is the Property Manager </Text>
        <Text style={styles.line4To6}> (One Party) </Text>
        <Text style={styles.line7}>AND</Text>
        <Text style={styles.line9To10}>____________________________________________ who is the LESSEE</Text>
        <Text style={styles.line9To10}>(The Other Party)</Text>
        <Text style={styles.line11}>The Agreement shall be effective as the date executed by Lessor as set forth in the next pages.</Text>
        <Text style={styles.pageOne}>Lessee's Initials _______                                                                                                                          1</Text>
      </View>
    </Page>
    <Page size="A4" style={styles.page}>
      <Image style={styles.logo} src={logo} />
      <View style={styles.section}>
        <Text style={styles.newRoman12}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For the covenants contained herein, and other good and valuable considerations, the receipt and sufficiency of which is hereby acknowledged, the Parties agree as follows: </Text>
        <Text style={styles.Enter}></Text>
        <Text style={styles.newRoman12}>1. <Text style={styles.newRoman12Bold}>PREMISES</Text>: The leased premises shall comprise that certain personal residence (includingboth the house and the land) located at <Text style={styles.newRoman12Bold}>E 1761 Grosvenor Place, Mississauga L5L3V8</Text> (“Premises”). The letter<Text style={styles.newRoman12Bold}> "E" </Text>in the beginning of the addressrefers to a specificroom in the residential building. Lessor leases the Premises to Lessee and Lessee leases the Premises fromLessor on the terms and conditions set forth herein.</Text>
        <Text style={styles.Enter}></Text>
        <Text style={styles.newRoman12}>2. <Text style={styles.newRoman12Bold}>TERM</Text>: The term of this Agreement shall be a period of <Text style={styles.newRoman12Bold}>9 months</Text>, beginning on <Text style={styles.newRoman12Bold}>August 22nd, 2022</Text>, and ending on <Text style={styles.newRoman12Bold}>May 31st, 2023</Text>. Any holding over after the expiration or earliertermination of the term without Lessor’s prior written consent shall be a default of thisAgreement and shall not be construed to be a tenancy from month to month, unless Lesseepays and Lessor accepts payment of rent for the next full calendar month (plus, if the termends on a day other than the last day of the month, rent forthe remainder of the month duringwhich the term ends).</Text>
        <Text style={styles.Enter}></Text>
        <Text style={styles.newRoman12}>3. <Text style={styles.newRoman12Bold}>MONTHLY RENT</Text>: The rent to be paid by Lessee to the Lessor throughout the term of thisAgreement is<Text style={styles.newRoman12Bold}> $950 </Text>per month and shall be due on the 1st day of each month. Rent includesutilities, Wi-Fi, household supplies, periodic cleaning. Rent for the first and lastmonthsof the term shall be paid to the Lessor at the time this Agreement is executed. Lesseeshall not deduct or offset against rent unless expressly permitted by applicable law. Monthlyrent is paid in full and is not refundable</Text>
        <Text style={styles.Enter}></Text>
        <Text style={styles.newRoman12}>4. <Text style={styles.newRoman12Bold}>PAYMENTS</Text>: Any payments related to this agreement shall be made via e-transfer <Text style={styles.link}>tosuhihkirill@icloud.com</Text> or via cash to the Property Manager. Other payment methods can bediscussed with the Property Manager.</Text>
        <Text style={styles.Enter}></Text>
        <Text style={styles.newRoman12}>5. <Text style={styles.newRoman12Bold}>HOUSE RULES</Text>: The house rules are meant to guide behaviour regarding premises andinteractions between lessees of the premises. Violation of these rules may lead to an evictionnotice after consistent negligence of the rules listed below.</Text>
        <Text style={styles.newRoman12List}>• There shall be no smoking anywhere within the house, garage or any other indoorstructure located at the Premises. Smoking is only permitted in a designated smokingarea. Violation of this rule may lead to immediate eviction notice with no warningsgiven and no deposit refund.</Text>
        <Text style={styles.newRoman12List}>• Lessee shall not permit any occupant, guest or invitee to violate this rule.</Text>
        <Text style={styles.newRoman12List}>• The only use of the Premises shall be as a private residence. Other than Lessee’simmediate family members, no other persons shall reside in the Premises without theexplicit consent of the Lessor in advance.</Text>
        <Text style={styles.newRoman12List}>• Lessee, its occupants, guests and other invitees shall not behave in any manner that isunlawful, disorderly or that disturbs the neighbors or other persons.</Text>
        <Text style={styles.newRoman12List}>• Lessee shall be solely responsible and liable for the conduct of all of Lessee’soccupants, guests, pets and other invitees.</Text>
        <Text style={styles.newRoman12List}>• There shall be no noise from 12pm to 7am at the premises*.</Text>
        <Text style={styles.newRoman12List}>• There shall be a notice in advance to the lessor if a “gathering” or “party” will behosted within the premises. The notice shall be given no later than 3 days before thegathering or party.</Text>
        <Text style={styles.pageTwo}>Lessee's Initials _______                                                                                                                          2</Text>
      </View>
    </Page>
    <Page size="A4" style={styles.page}>
      <Image style={styles.logo} src={logo} />
      <View style={styles.section}>
        <Text style={styles.newRoman12}>7. <Text style={styles.newRoman12Bold}>ENTRY AND INSPECTION</Text>: Lessee shall permit Lessor, or the Property Manager, to enterthePremises at reasonable times and upon reasonable (not less than 24 hours) notice for thepurpose of inspecting the Premises or showing the same to prospective purchasers, or formakingrepairs to the Premises pursuant to this Agreement. In the case of emergency, nonotice shall berequired. If a repair is necessary for which Lessor is responsible under thisAgreement, Lesseeshall give notice thereof to Lessor in a timely manner.</Text>
        <Text style={styles.Enter}></Text>
        <Text style={styles.newRoman12}>8. <Text style={styles.newRoman12Bold}>DEPOSIT</Text>: At the signing of this Agreement, Lessee shall deposit with the Lessor lastmonth rent in the amount of <Text style={styles.newRoman12Bold}>$950</Text> at the time of signing this agreement.</Text>
        <Text style={styles.Enter}></Text>
        <Text style={styles.newRoman12}>9. <Text style={styles.newRoman12Bold}>ATTORNEY’S FEES</Text>: In the event action is taken by either party to enforce thisAgreement,or to enforce any rights arising out of the breach of this Agreement, or to evictLessee, guests, orother occupants; the prevailing party shall be entitled to all costs incurredin connection withsuch action, including reasonable attorney fees and collection costs, withor without suit.</Text>
        <Text style={styles.Enter}></Text>
        <Text style={styles.newRoman12}>10. <Text style={styles.newRoman12Bold}>NOTICES</Text>: All noticesshall be given by mailing the same, postage prepaid, to Lessee at thePremises or to the Lessor at the address shown below Lessor’s signature or at such otherplaces as may be designated by a party in writing.</Text>
        <Text style={styles.Enter}></Text>
        <Text style={styles.newRoman12}>11. <Text style={styles.newRoman12Bold}>LESSOR SHALL NOT BE LIABLE</Text>: Lessor shallnot be liable for any damages or lossesto Lessee, its occupants, guests, invitees or other persons regardless of the cause therefore,unlesscaused by the gross negligence or willful misconduct of Lessor. Lessee shallindemnify, defendand hold Lessor harmless from any and all loss, damage or claims of anytype due to the actionsof Lessee, its occupants, guests or other invitees resulting in damageto any person or property.Lessor shall not be liable for personal injury or damages or loss ofLessee’s personal property(furniture, jewelry, clothing, etc.) due to theft, vandalism, fire,water, rain, hail, smoke,explosions, sonic booms, or other causes whatsoever, including thenegligence of Lessor,whether occurring at the Premises, or within or about the exterior yardarea located at theresidence. Lessee shall secure renter’s insurance to protect Lessee againstliabilities andoccurrences. Lessor will not be responsible for providing any services such asmoving vehicles, handling furniture, delivering packages.</Text>
        <Text style={styles.Enter}></Text>
        <Text style={styles.newRoman12}>12. <Text style={styles.newRoman12Bold}>DEFAULT BY LESSEE</Text>: Lessor may, upon explicit notice to Lessee, terminate thisAgreement and Lessee’s right to occupancy of the Premises if any one of the followingconditions of default occur: (1) Lessee fails to pay rent or any other charges due under this Agreement within ten <Text style={styles.newRoman12Bold}>(10) days</Text> after the due date; (2) Lessee, or Lessee’s occupants, guestsorother invitees, violates any term or condition of this Agreement, Lessor’s rules andregulations,the CC&Rs or applicable provincial and local laws and fails to cure the samewithin five (5) daysafter written notice thereof from Lessor (however in the event the samedefault occurs more thantwice in any six month period, the third default may, at Lessor’selection, be deemeda noncurable default); (3) Lessee abandons the Premises; (4) Lessee, orLessee’s occupants, guests orother invitees commits a crime at the Premises, or (5) Lessee,or Lessee’s occupants, guests or other invitees threaten to assault or use abusive languageagainst Lessor. Lessor shall have allremedies at law and in equity in the event of Lessee’sdefault.</Text>
        <Text style={styles.pageThree}>Lessee's Initials _______                                                                                                                          3</Text>
      </View>
    </Page>
    <Page size="A4" style={styles.page}>
      <Image style={styles.logo} src={logo} />
      <View style={styles.section}>
        <Text style={styles.newRoman12}>13. <Text style={styles.newRoman12Bold}>ABANDONMENT</Text>: Abandonment shall have occurred if, (1) without notifying the Lessor, Lessee is absent from the Premises for 15 days while rent is due and Lessee’s possessionshavenot been removed from the Premises, or (2) without notifying the Lessor, Lessee isabsent for 1day while rent is due,and Lessee’s possessions have been removed from the Premises.</Text>
        <Text style={styles.Enter}></Text>
        <Text style={styles.newRoman12}>14. <Text style={styles.newRoman12Bold}>NO ALTERATIONS</Text>: Lessee shall not make any alterations to the Premises, including butnot limited to painting, wallpapering, installing new locks, etc., without first obtaining priorwritten consent from the Lessor. Lessee may have pictures on walls but shall repair and paintallholes or other damage to walls. Lessee shall not install any appliances which attach towalls orstructures, including satellite dishes, without Lessor’s prior written consent.</Text>
        <Text style={styles.Enter}></Text>
        <Text style={styles.newRoman12}>15. <Text style={styles.newRoman12Bold}>ILLEGAL ACTIVITY</Text>: Lessee understands and agrees that this Agreement, and Lessee’soccupancy rights, may be terminated immediately upon written notice, for any illegal activityconducted by Lessee, or by any occupant, guest or other invitee of Lessee whether or notsuch activity is cited by a police authority.</Text>
        <Text style={styles.Enter}></Text>
        <Text style={styles.newRoman12}>16. <Text style={styles.newRoman12Bold}>ASSIGNMENT AND SUBLETTING</Text>: Lessee shall not assign this Agreement or sublet anyportion of the Premises without prior written consent of the Property Manager, which shall not beunreasonably withheld.</Text>
        <Text style={styles.Enter}></Text>
        <Text style={styles.newRoman12}>17. <Text style={styles.newRoman12Bold}>GOVERNING LAW</Text>: This Agreement is governed by Residential Tenancy Act, 2006. Thisagreement cannot take away rights and responsibilities outlined in Residential Tenancy Act, 2006.</Text>
        <Text style={styles.Enter}></Text>
        <Text style={styles.newRoman12}>18. <Text style={styles.newRoman12Bold}>ENTIRE AGREEMENT</Text>: This document constitutes the entire agreement and may bemodified or amended only by written agreement signed by both Parties. There are no oralagreements between the Parties. The contract can be terminated in the case where bothpartiesagree. However, the last month's rent in total of $<Text style={styles.newRoman12Bold}>950</Text> shall not be refunded.</Text>
        <Text style={styles.pageFour}>Lessee's Initials _______                                                                                                                          4</Text>
      </View>
    </Page>
    <Page size="A4" style={styles.page}>
      <Image style={styles.logo} src={logo} />
      <View style={styles.section}>
        <Text style={styles.newRoman12}>IN WITNESS THEREOF, the Parties have caused thisAgreement to be executed on thedates set forth below.</Text>
        <Text style={styles.Enter}></Text>
        <Text style={styles.newRoman12Bold}>This is a binding legal document. Lessee acknowledges reading allthis agreement carefully, and obtaining advice of counsel, if desired, before signing.</Text>
        <Text style={styles.Enter}></Text>
        <Text style={styles.newRoman15Bold}>Property Manager’s Full Legal Name: Kirill Sukhikh</Text>
        <Text style={styles.Enter}></Text>
        <Text style={styles.newRoman14Bold}>Property Manager’s Signature: _____________________________</Text>
        <Text style={styles.newRoman12}>Date: 12-08-22</Text>
        <Text style={styles.newRoman12}>Address: Suite 140090 Burnhamthorpe Road West, Mississauga, ON L5B 3C3</Text>
        <Text style={styles.newRoman12}>Phone: 437-329-4685</Text>
        <Text style={styles.Enter}></Text>
        <Text style={styles.Enter}></Text>
        <Text style={styles.Enter}></Text>
        <Text style={styles.Enter}></Text>
        <Text style={styles.newRoman14Bold}>Lessee’s Full Legal Name: ________________________</Text>
        <Text style={styles.Enter}></Text>
        <Text style={styles.newRoman14Bold}>Lessee’s Signature: ________________________</Text>
        <Text style={styles.newRoman12}>Date: ________________________</Text>
        <Text style={styles.newRoman12}>Phone: ________________________</Text>
        <Text style={styles.pageFive}>Lessee's Initials _______                                                                                                                          5</Text>
      </View>

    </Page>
  </Document>
);

export default TenantForm