import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import CompaniesLayout from '../CompaniesLayout'
import shippingBg from '@/assets/companies/shipping-sdn-bhd-bg.webp'
import titleImg from '@/assets/companies/muskaan_shipping_sdn/shipping.webp'
import statistics from '@/assets/companies/muskaan_shipping_sdn/statistics.webp'
import statisticsMonthlyExport from '@/assets/companies/muskaan_shipping_sdn/monthly_export.webp'
import statisticsTotalExports from '@/assets/companies/muskaan_shipping_sdn/total_exports.webp'
import statisticsExportsCountries22 from '@/assets/companies/muskaan_shipping_sdn/export_countries22.webp'
import statisticsExportsCountries23 from '@/assets/companies/muskaan_shipping_sdn/export_countries23.webp'
import visionBg from '@/assets/companies/vision.webp'
import visionIcon from '@/assets/companies/vision_icon.png'
import targetIcon from '@/assets/companies/target.png'
import customBrokerageImg from '@/assets/companies/muskaan_shipping/custom_brokerage.webp'
import logImg from '@/assets/companies/muskaan_shipping/logistic_transportation.webp'
import ourCommitmentImg from '@/assets/companies/muskaan_shipping/our_commitment.webp'
import CustomText from '@/components/companies/CustomText'
import ServicesCard from '@/components/companies/ServicesCard'
import StatisticsCard from '@/components/companies/StatisticsCard'
import VisibilityTracker, { AnimationType } from '@/components/VisibilityTracker'
import ServicesCardMobile from '@/components/companies/ServicesCardMobile'

export default function Home() {
    const theme = useTheme()
    const mobileMode = useMediaQuery('(max-width:599px)')
    const customMobileMode = useMediaQuery('(min-width:600px) and (max-width:699px)')
    const ultraMobileMode = useMediaQuery('(max-width:400px)')

    return (
        <CompaniesLayout
            image={shippingBg}
            title={'Muskaan Shipping SDN BHD'}
            subtitle='Penghantaran dan Logistik yang Mudah'
            caption='(846593-A)'
            companyName='MUSKAAN SHIPPING SDN BHD'
            mapSrc={
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.2665006882808!2d101.46583722797837!3d3.0515958014528834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc533c31d06c2d%3A0xc1ad8304f5dad6f8!2sCENTRO+MALL!5e0!3m2!1sen!2sin!4v1558955895296!5m2!1sen!2sin'
            }
            address='Centro Business CentreSuite #16-02, level 16,No.8 Jalan Batu Tiga Lama,Klang 41200 Selangor, Malaysia'
            telephoneNumber='+603-33418460/61'
            email='Malaysiapkl@muskan-group.com'
        >
            <Box sx={{ px: { xs: theme.spacing(2), sm: theme.spacing(4), md: theme.spacing(12) } }}>
                <Container maxWidth='xl' disableGutters>
                    <Typography variant='h2' sx={{ mb: '1rem', color: '#1B1B1F' }}>
                        About Us
                    </Typography>
                    <Grid container spacing={2} alignItems='center'>
                        <Grid item xs={12} sm={6}>
                            <CustomText text="Muskan Shipping Sdn. Bhd., established in 2008, began its presence at Peninsular Malaysian ports with regular vessel calls. Originally, the Muskan Group operated through an agency network, delegating responsibilities to appointed agencies in the region. However, as the business expanded in tandem with Malaysia's robust economic growth and political stability, the need for a more focused approach became apparent." />
                            <CustomText text='In response to this challenge, Muskan Shipping Sdn. Bhd. formed a joint venture partnership with local interests in 2010. Headquartered in Port Kelang and with branch offices at key base ports in Port Kelang, Penang, and Pasir Gudang, supported by a network of sub-agents in India, the Gulf, and Europe, Muskan Shipping Sdn. Bhd. secured exclusive coverage of the Malaysian market for Muskan Line.' />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Image src={titleImg} alt='' style={{ width: '100%', height: 'auto' }} />
                        </Grid>
                    </Grid>
                    <CustomText text='Today, Muskan Shipping Sdn. Bhd. boasts a dedicated team of 10 professionals across Peninsular Malaysia. To bolster its core Container and Car Carrier traffic services, the office automation networking system was enhanced to meet the growing demands of valued customers.' />
                    <CustomText
                        text={`Complementing its container services, Muskan Line Own Container Fleet maintains an inventory of over 1000 units of various container types, easily recognizable as "Muskan Box" on both roads and vessels. Regional Trade Management Offices in Malaysia provide comprehensive support for 'Muskan' Line operations, optimizing efficiency through a global network that seamlessly coordinates day-to-day shipping requirements. In line with 'Muskan' Line's philosophy and established global network, Muskan Shipping Sdn. Bhd. stands fully prepared to meet the rising expectations of excellence from its valued customers.`}
                    />
                    <Typography variant='h3' sx={{ textAlign: 'start', mt: '4rem', mb: '1rem', color: '#1B1B1F' }}>
                        Statistics
                    </Typography>
                    <Image src={statistics} alt='' style={{ width: '100%', height: 'auto', padding: '2rem 6rem' }} />
                    <Typography variant='h4' sx={{ textAlign: 'center', mb: '4rem', color: '#1B1B1F', fontWeight: 600 }}>
                        Country Growth V/S World Growth V/S GDP Growth
                    </Typography>
                    <Image src={statisticsMonthlyExport} alt='' style={{ width: '100%', height: 'auto', padding: '2rem 6rem' }} />
                    <Typography variant='h4' sx={{ textAlign: 'center', mb: '4rem', color: '#1B1B1F', fontWeight: 600 }}>
                        Malaysia’s Monthly Exports by Main Sectors, January-November 2023
                    </Typography>
                    <Image src={statisticsTotalExports} alt='' style={{ width: '100%', height: 'auto', padding: '2rem 6rem' }} />
                    <Typography variant='h4' sx={{ textAlign: 'center', mb: '4rem', color: '#1B1B1F', fontWeight: 600, whiteSpace: 'pre-line' }}>
                        {"Malaysia’s Exports by Main Sectors, Jan-Nov 2023\nTotal Exports: RM1.308 trillion"}
                    </Typography>
                    <StatisticsCard exporterRank={23} importerRank={25} tradeBalanceRank={10} totalTradeAmtList={totalTradeAmtList} />
                    <Image src={statisticsExportsCountries22} alt='' style={{ width: '100%', height: 'auto', padding: '2rem 6rem' }} />
                    <Typography variant='h4' sx={{ textAlign: 'center', mb: '4rem', color: '#1B1B1F', fontWeight: 600, whiteSpace: 'pre-line' }}>
                        {"Top 10 Major Export Countries, Jan-Nov 2022\nTotal Exports: RM1.418 trillion"}
                    </Typography>
                    <Image src={statisticsExportsCountries23} alt='' style={{ width: '100%', height: 'auto', padding: '2rem 6rem' }} />
                    <Typography variant='h4' sx={{ textAlign: 'center', mb: '4rem', color: '#1B1B1F', fontWeight: 600, whiteSpace: 'pre-line' }}>
                        {"Top 10 Major Export Countries, Jan-Nov 2023\nTotal Exports: RM1.308 trillion"}
                    </Typography>

                </Container>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    position: 'relative',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Image src={visionBg} alt='visionBg' style={{ height: 'auto', width: mobileMode ? '300%' : '100%' }} />
                <Grid
                    container
                    spacing={mobileMode ? 2 : 4}
                    sx={{
                        position: 'absolute',
                        px: { xs: theme.spacing(2), sm: theme.spacing(4), md: theme.spacing(12) },
                    }}
                >
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ textAlign: 'start' }}>
                            {customMobileMode || ultraMobileMode ? (
                                <></>
                            ) : (
                                <Image src={visionIcon} alt='' style={{ height: 'auto', width: '12.5%' }} />
                            )}
                            <VisibilityTracker animationType={AnimationType.COLLAPSE} timeout={1500}>
                                <Typography
                                    variant='h3'
                                    sx={{
                                        textAlign: 'start',
                                        mt: '2rem',
                                        mb: '1rem',
                                        color: '#FFFFFF',
                                        fontWeight: 600,
                                    }}
                                >
                                    Our Vision
                                </Typography>
                            </VisibilityTracker>
                            <VisibilityTracker animationType={AnimationType.FADE} timeout={2000}>
                                <Typography variant='subtitle2' sx={{ textAlign: 'justify', color: '#FFFFFF', fontWeight: 300 }}>
                                    We aim to achieve what multinational forwarders cannot: meeting our customers' Critical Success Factors.
                                    Our ambition is entirely customer-centric, recognizing that our customers have the freedom to choose
                                    their service provider.
                                </Typography>
                            </VisibilityTracker>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ textAlign: 'start' }}>
                            {customMobileMode || ultraMobileMode ? (
                                <></>
                            ) : (
                                <Image src={targetIcon} alt='' style={{ height: 'auto', width: '12.5%' }} />
                            )}
                            <VisibilityTracker animationType={AnimationType.COLLAPSE} timeout={1500}>
                                <Typography
                                    variant='h3'
                                    sx={{
                                        textAlign: 'start',
                                        mt: '2rem',
                                        mb: '1rem',
                                        color: '#FFFFFF',
                                        fontWeight: 600,
                                    }}
                                >
                                    Our Mission
                                </Typography>
                            </VisibilityTracker>
                            <VisibilityTracker animationType={AnimationType.FADE} timeout={2000}>
                                <Typography variant='subtitle2' sx={{ textAlign: 'justify', color: '#FFFFFF', fontWeight: 300 }}>
                                    We prioritize clear communication and adaptability to meet changing customer needs, striving to build
                                    enduring relationships. Our extensive transportation knowledge ensures top-quality service.
                                </Typography>
                            </VisibilityTracker>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ px: { xs: theme.spacing(2), sm: theme.spacing(4), md: theme.spacing(12) } }}>
                <Container maxWidth='xl' disableGutters>
                    <Typography variant='h3' sx={{ textAlign: 'start', mt: '4rem', mb: '1rem', color: '#1B1B1F' }}>
                        Our Specialities
                    </Typography>
                    <Typography variant='h5' sx={{ textAlign: 'start', mt: '2rem', mb: '0.5rem', color: '#1B1B1F' }}>
                        Core business of Muskan Line:
                    </Typography>
                    <CustomText
                        text={`Our container shipping services play a pivotal role in transporting a wide array of products essential to people's daily lives, ranging from general consumer goods to crucial parts and raw materials. These services span the globe, with a strong presence in four key hubs: Japan, Asia, Europe, and North America, representing a central facet of "Muskan" Line's core operations.`}
                    />
                    <CustomText text='We have forged robust international alliances with esteemed shipping companies hailing from Japan, Germany, and Taiwan. These collaborations enable us to operate major East-West routes, connecting Asia with North America, Asia with Europe, and Europe with North America. Furthermore, we extend our services to encompass intra-Asian routes that encompass the Middle East and the Indian subcontinent, as well as the South-North route that links South America, Australia, and Africa with various regions in Asia.' />
                    <Typography variant='h5' sx={{ textAlign: 'start', mt: '2rem', mb: '0.5rem', color: '#1B1B1F' }}>
                        Elevating Customer Satisfaction through Exceptional Service Quality:
                    </Typography>
                    <CustomText
                        text={`Muskan Line's container shipping services stand out for their consistent, frequent schedules and top-notch service quality. Our unwavering commitment to addressing diverse customer requirements has earned us a strong global reputation, with several leading companies recognizing us as Carrier of the Year. Additionally, "Muskan" Line distinguishes itself through its integrated infrastructure, which includes container terminals in India, the U.S., and the Gulf, as well as specialized double-stack trains in India, enhancing our offerings in marine and land-based transportation.`}
                    />
                    <Typography variant='h5' sx={{ textAlign: 'start', mt: '2rem', mb: '0.5rem', color: '#1B1B1F' }}>
                        Navigational Safety and Environmental Responsibility:
                    </Typography>
                    <CustomText text="The paramount duty of a transportation carrier is to securely convey customers' cargo to its destination, maintaining its original condition. Beyond handling standard container freight, we offer technical assistance for the safe transport of hazardous materials and oversized items that cannot fit into containers, ensuring a seamless and secure marine and onshore journey. Furthermore, we are committed to environmental conservation, implementing practices like fuel-efficient cruising to mitigate ship-generated greenhouse gas emissions and employing shore power at our Long Beach, California terminal to eliminate ship fuel consumption." />
                    <Typography variant='h5' sx={{ textAlign: 'start', mt: '2rem', mb: '0.5rem', color: '#1B1B1F' }}>
                        Ocean Freight:
                    </Typography>
                    <CustomText
                        text={
                            '(Providing you with the most flexible, cost-efficient and fully coordinated end-to-end ocean freight solutions)\n We’re here to ensure your cargo reaches the right place, at the right time, in the most economical way – without the need to compromise on quality or reliability. Through the extensive equipment and consolidation options of ocean freight, we work closely with you to find budget-friendly, end-to-end ocean cargo shipping solutions, tailored to your specific needs. We’re here to take the stress out of shipping for you. We give you confidence and control, providing full visibility of your shipments and offering a wide range of quality controlled equipment types that suit you.'
                        }
                    />
                    <Typography variant='h5' sx={{ textAlign: 'start', mt: '2rem', mb: '0.5rem', color: '#1B1B1F' }}>
                        Customs Services:
                    </Typography>
                    <CustomText
                        text={
                            '(Taking the complexity out of customs, so you can focus on your business and your customers)\n We understand that you need a resilient customs partner with the local expertise and global tools that provide you with a consistent, high-quality service, no matter where your business takes you. In an ever-changing regulatory environment, secure the peace of mind that comes with knowing that your goods are cleared fast, and in total compliance with the rules of your market. Let one of the world’s largest customs brokers put their global network at your disposal.'
                        }
                    />
                    {mobileMode ? (
                        <Box>
                            <ServicesCardMobile
                                image={ourCommitmentImg}
                                title='Our Commitment'
                                desc="Our mission is to provide high-quality services and solutions that earn and maintain our customers' trust and loyalty. This is rooted in our core beliefs:"
                            />
                            <ServicesCardMobile
                                image={customBrokerageImg}
                                title='Custom Brokerage'
                                desc='Muskan Shipping PTE LTD provides customs brokerage services for inbound and outbound shipments, including customs clearance and door-to-door delivery coordination. We also offer expert consultancy on import-export regulations and have invested in IT systems for efficient Electronic Data Interchange (EDI) with customs authorities.'
                            />
                            <ServicesCardMobile
                                image={logImg}
                                title='Logistic & Transportation'
                                desc=' Our tailored services in Peninsular Malaysia include a wide range of trucks for prompt pick-up and delivery. We utilize multi-modal options, including road, rail, and water transport, along with a vast network of carriers for rapid response to changing needs.'
                            />
                        </Box>
                    ) : (
                        <Grid
                            container
                            spacing={customMobileMode ? 1 : 2}
                            sx={mobileMode ? { display: 'flex', flexDirection: 'column', alignItems: 'center' } : { my: '4rem' }}
                        >
                            <Grid item sm={4}>
                                <ServicesCard
                                    image={ourCommitmentImg}
                                    title='Our Commitment'
                                    desc="Our mission is to provide high-quality services and solutions that earn and maintain our customers' trust and loyalty. This is rooted in our core beliefs:"
                                />
                            </Grid>
                            <Grid item sm={4}>
                                <ServicesCard
                                    image={customBrokerageImg}
                                    title='Custom Brokerage'
                                    desc={
                                        customMobileMode
                                            ? 'Muskan Shipping PTE LTD provides customs brokerage services for inbound and outbound shipments, including customs clearance and door-to-door delivery coordination. We also offer expert consultancy on import-export regulations and efficient Electronic Data Interchange (EDI) with customs.'
                                            : 'Muskan Shipping PTE LTD provides customs brokerage services for inbound and outbound shipments, including customs clearance and door-to-door delivery coordination. We also offer expert consultancy on import-export regulations and have invested in IT systems for efficient Electronic Data Interchange (EDI) with customs authorities.'
                                    }
                                />
                            </Grid>
                            <Grid item sm={4}>
                                <ServicesCard
                                    image={logImg}
                                    title='Logistic & Transportation'
                                    desc=' Our tailored services in Peninsular Malaysia include a wide range of trucks for prompt pick-up and delivery. We utilize multi-modal options, including road, rail, and water transport, along with a vast network of carriers for rapid response to changing needs.'
                                />
                            </Grid>
                        </Grid>
                    )}
                </Container>
            </Box>
        </CompaniesLayout>
    )
}
const totalTradeAmtList = ['$299,230,434,394', '$238,249,762,706', '$60,980,671,688', '73.84%', '66.91%']
