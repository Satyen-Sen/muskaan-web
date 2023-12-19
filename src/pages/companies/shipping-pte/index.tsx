import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import CompaniesLayout from '../CompaniesLayout'
import shippingBg from '@/assets/companies/shipping-pte-bg.webp'
import titleImg from '@/assets/companies/muskaan_shipping/shipping.webp'
import statistics18 from '@/assets/companies/muskaan_shipping/statistics.webp'
import statisticsMerchandiseTrade from '@/assets/companies/muskaan_shipping/merchandise_trade.webp'
import statisticsNonOilMerchandiseTrade from '@/assets/companies/muskaan_shipping/non_oil_merchandise_trade.webp'
import visionBg from '@/assets/companies/vision.webp'
import visionIcon from '@/assets/companies/vision_icon.png'
import customBrokerageImg from '@/assets/companies/muskaan_shipping/custom_brokerage.webp'
import logImg from '@/assets/companies/muskaan_shipping/logistic_transportation.webp'
import ourCommitmentImg from '@/assets/companies/muskaan_shipping/our_commitment.webp'
import StatisticsCard from '@/components/companies/StatisticsCard'
import ServicesCard from '@/components/companies/ServicesCard'
import ServicesCardMobile from '@/components/companies/ServicesCardMobile'
import CustomText from '@/components/companies/CustomText'
import VisibilityTracker, { AnimationType } from '@/components/VisibilityTracker'
export default function Home() {
    const theme = useTheme()
    const mobileMode = useMediaQuery('(max-width:599px)')
    const customMobileMode = useMediaQuery('(min-width:600px) and (max-width:699px)')

    return (
        <CompaniesLayout
            image={shippingBg}
            title={'Muskan Shipping PTE\nLtd.'}
            mapSrc={
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.184303450182!2d103.9045156231366!3d1.333844262451175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17fac0a6a723%3A0x168dad5006e4ed5e!2sEunos%20Techpark!5e0!3m2!1sen!2sin!4v1702716372440!5m2!1sen!2sin'
            }
            address='60 Kaki Bukit Place #02-13Suites 3 Eunos Techpark,Singapore 415979'
            telephoneNumber='+65 63224420'
            email='Singapore@muskan-group.com'
        >
            <Box sx={{ px: { xs: theme.spacing(2), sm: theme.spacing(4), md: theme.spacing(12) } }}>
                <Container maxWidth='xl' disableGutters>
                    <Typography variant='h2' sx={{ mb: '1rem', color: '#1B1B1F' }}>
                        About Us
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <CustomText text='Muskan Shipping (PTE) Ltd, headquartered in Singapore since its establishment in 2010, has emerged as a prominent player in the logistics and freight forwarding industry. Our dedicated network of freight forwarding services extends across a vast expanse, encompassing key ports within the Indian Subcontinent (India and Bangladesh) and South East Asia (Indonesia, Malaysia, Thailand, Cambodia, Myanmar, Vietnam, and the Philippines). ' />
                            <CustomText text='With a presence in over 30 locations across more than 10 countries in this region, we are committed to providing a dependable schedule, robust connectivity with Main Line Operator (MLO) sailings, efficient fleet deployment, excellent customer service, and competitive pricing. Muskan Shipping (Pte) Ltd has expanded its operations to include services to major hub ports worldwide.' />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Image src={titleImg} alt='' style={{ width: '100%', height: 'auto' }} />
                        </Grid>
                    </Grid>
                    <CustomText text='We continually seek opportunities to enhance our presence in the global container shipping industry and have successfully ventured into main line trades serving the Gulf and India Subcontinent regions. Additionally, our extensive network of container liner services spans across the Far East to Europe, the Black Sea, Gulf, the Indian sub-continent, the Red Sea/Gulf, Africa, Oceania, Latin America, and the West Coast of the USA. Muskan Shipping (Pte) Ltd was among the pioneering liners to establish a vital link connecting Asia, the Middle East, and Africa.' />
                    <CustomText text='Our commitment to providing efficient and reliable logistics solutions has positioned us as a trusted partner for businesses and clients around the world. We are dedicated to facilitating seamless trade connections and delivering cargo to its destination with precision and timeliness. Muskan Shipping (Pte) Ltd remains at the forefront of the container shipping industry, with a global presence and a vision for continued growth and excellence.' />
                    <Typography variant='h3' sx={{ textAlign: 'start', mt: theme.spacing(4), color: '#1B1B1F' }}>
                        Statistics
                    </Typography>
                    <Image src={statistics18} alt='' style={{ width: '100%', height: 'auto', padding: '1rem 8rem' }} />
                    <Typography variant='h4' sx={{ textAlign: 'center', mb: '4rem', color: '#1B1B1F', fontWeight: 600 }}>
                        Overall Exports & Imports of Services (2014-18)
                    </Typography>
                    <Image src={statisticsMerchandiseTrade} alt='' style={{ width: '100%', height: 'auto', padding: '1rem 8rem' }} />
                    <Typography variant='h4' sx={{ textAlign: 'center', mb: '4rem', color: '#1B1B1F', fontWeight: 600 }}>
                        Total Merchandise Tradeat Current Prices, 2018-2022
                    </Typography>
                    <StatisticsCard exporterRank={14} importerRank={15} tradeBalanceRank={13} totalTradeAmtList={totalTradeAmtList} />
                    <Image src={statisticsNonOilMerchandiseTrade} alt='' style={{ width: '100%', height: 'auto', padding: '1rem 8rem' }} />
                    <Typography variant='h4' sx={{ textAlign: 'center', mb: '4rem', color: '#1B1B1F', fontWeight: 600 }}>
                        Non-Oil Merchandise trade BYMAJOR Commodity Section, 2022
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
                <Image src={visionBg} alt='' style={{ height: 'auto', width: mobileMode ? '250%' : '125%' }} />
                <Box
                    sx={{
                        position: 'absolute',
                        padding: { xs: theme.spacing(2), sm: theme.spacing(4), md: theme.spacing(12) },
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                    }}
                >
                    <Image src={visionIcon} alt='' style={{ height: 'auto', width: mobileMode ? '8%' : '12.5%' }} />
                    <VisibilityTracker animationType={AnimationType.COLLAPSE} timeout={1500}>
                        <Typography
                            variant='h3'
                            sx={{
                                textAlign: 'start',
                                mt: { xs: '1rem', md: '2rem' },
                                mb: '1rem',
                                color: '#FFFFFF',
                                fontWeight: 600,
                            }}
                        >
                            Our Vision
                        </Typography>
                    </VisibilityTracker>
                    <VisibilityTracker animationType={AnimationType.FADE} timeout={2000}>
                        <Typography
                            variant='subtitle2'
                            sx={{
                                textAlign: 'justify',
                                color: '#FFFFFF',
                                fontWeight: 300,
                                width: { xs: '100%', md: '60%' },
                            }}
                        >
                            Our core values are our foundation for future success, guiding us in serving our customers and exploring new
                            services and routes. We remain committed to shipping, especially intra-Asia routes, leveraging our deep regional
                            ties. We prioritize staff development, pursue growth in emerging markets like Africa and South America, and
                            invest in efficient vessels and land-based infrastructure. We believe our expertise and adaptability will
                            continue to yield tangible results across diverse environments.
                        </Typography>
                    </VisibilityTracker>
                </Box>
            </Box>
            <Box sx={{ px: { xs: theme.spacing(2), sm: theme.spacing(4), md: theme.spacing(12) } }}>
                <Container maxWidth='xl' disableGutters>
                    <Typography variant='h3' sx={{ textAlign: 'start', mt: '6rem', mb: '2rem', color: '#1B1B1F' }}>
                        Our Specialities
                    </Typography>
                    <CustomText text='Muskan Shipping (Pte) Ltd believes in values-driven business growth, serving global customers since its inception. Initially operating as agents for M/s. Muskan Container Lines Pvt Ltd in India from 2008, we established our liner operations in 2010, currently operating a fleet of 400 TEUs with approximately 100 TEUs exported per month. Our container fleet consists of 1000 TEUs built between 1997 to 2014.' />
                    <CustomText text="We have earned a solid reputation as a reliable shipping line in the Asian and Gulf regions, with a strong presence in the Indian Sub-continent, Middle East, and South East Asian ports. Expanding our reach, we've entered Europe, CIS Destinations, China, and are actively exploring new opportunities in East Africa and Myanmar." />
                    <CustomText text='Our professional establishments across regions are supported by advanced networking technology, ensuring exceptional customer satisfaction, a key driver of our success.' />
                    <CustomText text='Muskan Shipping Pte. Ltd. operates as a Non-Vessel Operating Cargo Carrier (NVOCC), serving over 700 destinations worldwide. We specialize in securing competitive volume prices for LCL cargo, offering efficient consolidation services with various shipping lines. Our customers benefit from guaranteed weekly LCL groupage services to major global ports, emphasizing speed, connectivity, safety, and reliability.' />
                    <CustomText text='Led by professionals with extensive experience in international freight forwarding, NVOCC, and consolidation, we handle diverse cargo types, including hazardous and non-hazardous chemicals, machinery, raw materials, refrigerated goods, and oversized project cargo.' />
                    <CustomText text="Our group's expansion in the Asia Pacific region over recent years positions us on the path to becoming a global international freight forwarding company, dedicated to providing top-tier service to clients worldwide. Our Multi-Modal Transport System, supported by a proactive customer service team and a global agent network, ensures timely door-to-door cargo delivery, consistently meeting customer expectations." />
                    <Typography variant='h5' sx={{ textAlign: 'start', mt: '2rem', mb: '0.5rem', color: '#1B1B1F' }}>
                        Time Sensitive:
                    </Typography>
                    <CustomText
                        text={
                            'From planning to conceptualize of timing & executing Exhibition & artworks goods. We take pride in ensuring & know the whereabouts of your cargo from the time it’s in our hand to the time it departs for its next destination. Aircraft Parts & Ship Spares give you more option for your time sensitive cargo.\nHelping you to co-coordinate transport solution and arranging for your cargo to go on the earliest possible flight. Shipping a High Valuable Cargo & Luxury Vehicle with us don’t need to worry as we offer a complete 24/7 hours premise surveillance camera. With precision care & superior ground handling, we make sure your high valuable cargo & vehicle is in immaculate condition at all times.'
                        }
                    />
                    <Typography variant='h5' sx={{ textAlign: 'start', mt: '2rem', mb: '0.5rem', color: '#1B1B1F' }}>
                        Trucking Services:
                    </Typography>
                    <CustomText
                        text={
                            "At Muskaan Shipping Pte Ltd, we understand that trucking services are a critical component of many businesses' logistics needs. That's why we offer a comprehensive range of trucking services, including Full Container Haulage services and Out of Gauge (OOG) cargo transport service. With our experienced drivers and logistics professionals, we are committed to providing safe and efficient trucking services to meet your unique requirements.\nAt Muskaan Shipping Pte Ltd, we understand that trucking services are a critical component of many businesses' logistics needs. That's why we offer a comprehensive range of trucking services, including Full Container Haulage services and Out of Gauge (OOG) cargo transport service. With our experienced drivers and logistics professionals, we are committed to providing safe and efficient trucking services to meet your unique requirements."
                        }
                    />
                    <Typography variant='h5' sx={{ textAlign: 'start', mt: '2rem', mb: '0.5rem', color: '#1B1B1F' }}>
                        Customer Engagement:
                    </Typography>
                    <CustomText
                        text={
                            'We believe that operational excellence is a continuous journey and our aim is to always support our customers as they move up in the value chain. We do that through design principles and process standardization, controlling all project implementation, site & transport classification assessment and our continuous improvement culture.'
                        }
                    />
                    <Typography variant='h5' sx={{ textAlign: 'start', mt: '2rem', mb: '0.5rem', color: '#1B1B1F' }}>
                        Innovation across the supply chain:
                    </Typography>
                    <CustomText text="We work with renowned partners to implement the most advanced technologies in order to ensure the best service level for our customer's thanks to automated equipment dedicated to key tasks in our warehouses." />
                    <Typography component={'ul'} textAlign={'start'} variant='body1' sx={{ color: '#031225', ml: '1.25rem' }}>
                        {innovationList.map((item, index) => (
                            <Typography
                                component={'li'}
                                textAlign={'start'}
                                variant='body1'
                                sx={{ color: '#031225', mb: '1rem', lineHeight: '1rem' }}
                                key={index}
                            >
                                {item}
                            </Typography>
                        ))}
                    </Typography>
                    <Typography variant='h5' sx={{ textAlign: 'start', mt: '2rem', mb: '0.5rem', color: '#1B1B1F' }}>
                        Sustainability:
                    </Typography>
                    <CustomText text='As a global logistics company, Muskaan Group pays particular attention to its role in the protection of the environment and its responsibility to the community.' />
                    <Typography component={'ul'} textAlign={'start'} variant='body1' sx={{ color: '#031225', ml: '1.25rem' }}>
                        {sustainabilityList.map((item, index) => (
                            <Typography
                                component={'li'}
                                textAlign={'start'}
                                variant='body1'
                                sx={{ color: '#031225', mb: '1rem', lineHeight: '1rem' }}
                                key={index}
                            >
                                {item}
                            </Typography>
                        ))}
                    </Typography>
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
const totalTradeAmtList = ['$457,081,283,281', '$406,318,349,182', '$50,762,934,099', '186.55%', '150.31%']
const innovationList = [
    'upport start-ups to develop supply chain technologies',
    'Partner with emerging and established brands',
    'Invest in research to develop digital supply chains',
    'Automated pickup and order preparation for increased productivity.',
]
const sustainabilityList = [
    'Diversity is critical to our business success',
    'We ensure ethical employment practices throughout the world',
    'Safety and health is our priority',
]
