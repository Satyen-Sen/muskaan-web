import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Box, Container, Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import CompaniesLayout from '../CompaniesLayout'
import shippingBg from '../../../assets/companies/shipping-sdn-bhd-bg.png'
import titleImg from '../../../assets/companies/muskaan_shipping_sdn/shipping.png'
import statistics from '../../../assets/companies/muskaan_shipping_sdn/statistics.png'
import visionBg from '../../../assets/companies/vision.png'
import visionIcon from '../../../assets/companies/vision_icon.png'
import targetIcon from '../../../assets/companies/target.png'
import customBrokerageImg from '../../../assets/companies/muskaan_shipping/custom_brokerage.png'
import logImg from '../../../assets/companies/muskaan_shipping/logistic_transportation.png'
import ourCommitmentImg from '../../../assets/companies/muskaan_shipping/our_commitment.png'
import CustomText from '@/components/companies/CustomText'
import ServicesCard from '@/components/companies/ServicesCard'
import StatisticsCard from '@/components/companies/StatisticsCard'

export default function Home() {
    const theme = useTheme()

    return (
        <CompaniesLayout image={shippingBg} title='Muskaan Shipping SDN BHD'>
            <Box sx={{ px: theme.spacing(12) }}>
                <Container maxWidth='xl' disableGutters>
                    <Typography variant='h3' sx={{ textAlign: 'start', mb: '1rem', color: '#1B1B1F' }}>
                        About Us
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <CustomText text="Muskaan Shipping Sdn. Bhd., established in 2008, began its presence at Peninsular Malaysian ports with regular vessel calls. Originally, the Muskaan Group operated through an agency network, delegating responsibilities to appointed agencies in the region. However, as the business expanded in tandem with Malaysia's robust economic growth and political stability, the need for a more focused approach became apparent." />
                            <CustomText text='In response to this challenge, Muskaan Shipping Sdn. Bhd. formed a joint venture partnership with local interests in 2010. Headquartered in Port Kelang and with branch offices at key base ports in Port Kelang, Penang, and Pasir Gudang, supported by a network of sub-agents in India, the Gulf, and Europe, Muskaan Shipping Sdn. Bhd. secured exclusive coverage of the Malaysian market for Muskaan Line.' />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Image src={titleImg} alt='' style={{ width: '100%', height: 'auto' }} />
                        </Grid>
                    </Grid>
                    <CustomText text='Today, Muskaan Shipping Sdn. Bhd. boasts a dedicated team of 10 professionals across Peninsular Malaysia. To bolster its core Container and Car Carrier traffic services, the office automation networking system was enhanced to meet the growing demands of valued customers.' />
                    <CustomText
                        text={`Complementing its container services, Muskaan Line Own Container Fleet maintains an inventory of over 1000 units of various container types, easily recognizable as "Muskaan Box" on both roads and vessels. Regional Trade Management Offices in Malaysia provide comprehensive support for 'Muskaan' Line operations, optimizing efficiency through a global network that seamlessly coordinates day-to-day shipping requirements. In line with 'Muskaan' Line's philosophy and established global network, Muskaan Shipping Sdn. Bhd. stands fully prepared to meet the rising expectations of excellence from its valued customers.`}
                    />
                    <Typography variant='h3' sx={{ textAlign: 'start', mt: theme.spacing(4), color: '#1B1B1F' }}>
                        Statistics
                    </Typography>
                    <Image
                        src={statistics}
                        alt=''
                        style={{ width: '100%', height: 'auto', marginTop: theme.spacing(2) }}
                    />
                    <Typography
                        variant='h4'
                        sx={{
                            textAlign: 'center',
                            mb: '4rem',
                            mt: '1rem',
                            color: '#1B1B1F',
                            fontWeight: 'bold',
                        }}
                    >
                        Country Growth V/S World Growth V/S GDP Growth
                    </Typography>
                    <StatisticsCard
                        exporterRank='23'
                        importerRank='25'
                        tradeBalanceRank='10'
                        totalTradeAmtList={totalTradeAmtList}
                    />
                </Container>
            </Box>
            <Box sx={{ position: 'relative' }}>
                <Image src={visionBg} alt='' style={{ height: 'auto', width: '100%' }} />
                <Grid container spacing={3} sx={{ position: 'absolute', left: '0', top: '0', p: '6rem 12rem' }}>
                    <Grid item xs={6} sm={6}>
                        <Box sx={{ textAlign: 'start' }}>
                            <Image src={visionIcon} alt='' style={{ height: 'auto', width: '12.5%' }} />
                            <Typography
                                variant='h3'
                                sx={{ textAlign: 'start', my: '2rem', color: '#FFFFFF', fontWeight: 'bold' }}
                            >
                                Our Vision
                            </Typography>
                            <Typography variant='body1' sx={{ textAlign: 'start', color: '#FFFFFF' }}>
                                We aim to achieve what multinational forwarders cannot: meeting our customers' Critical
                                Success Factors. Our ambition is entirely customer-centric, recognizing that our
                                customers have the freedom to choose their service provider.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <Box sx={{ textAlign: 'start' }}>
                            <Image src={targetIcon} alt='' style={{ height: 'auto', width: '12.5%' }} />
                            <Typography
                                variant='h3'
                                sx={{ textAlign: 'start', my: '2rem', color: '#FFFFFF', fontWeight: 'bold' }}
                            >
                                Our Mission
                            </Typography>
                            <Typography variant='body1' sx={{ textAlign: 'start', color: '#FFFFFF' }}>
                                We prioritize clear communication and adaptability to meet changing customer needs,
                                striving to build enduring relationships. Our extensive transportation knowledge ensures
                                top-quality service.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ px: theme.spacing(12) }}>
                <Container maxWidth='xl' disableGutters>
                    <Typography variant='h3' sx={{ textAlign: 'start', mt: '4rem', mb: '2rem', color: '#1B1B1F' }}>
                        Our Services
                    </Typography>
                    <Typography variant='h5' sx={{ textAlign: 'start', my: '1rem', color: '#1B1B1F' }}>
                        Core business of Muskaan Line:
                    </Typography>
                    <CustomText
                        text={`Our container shipping services play a pivotal role in transporting a wide array of products essential to people's daily lives, ranging from general consumer goods to crucial parts and raw materials. These services span the globe, with a strong presence in four key hubs: Japan, Asia, Europe, and North America, representing a central facet of "Muskaan" Line's core operations.`}
                    />
                    <CustomText text='We have forged robust international alliances with esteemed shipping companies hailing from Japan, Germany, and Taiwan. These collaborations enable us to operate major East-West routes, connecting Asia with North America, Asia with Europe, and Europe with North America. Furthermore, we extend our services to encompass intra-Asian routes that encompass the Middle East and the Indian subcontinent, as well as the South-North route that links South America, Australia, and Africa with various regions in Asia.' />
                    <Typography variant='h5' sx={{ textAlign: 'start', my: '1rem', color: '#1B1B1F' }}>
                        Elevating Customer Satisfaction through Exceptional Service Quality:
                    </Typography>
                    <CustomText
                        text={`Muskaan Line's container shipping services stand out for their consistent, frequent schedules and top-notch service quality. Our unwavering commitment to addressing diverse customer requirements has earned us a strong global reputation, with several leading companies recognizing us as Carrier of the Year. Additionally, "Muskaan" Line distinguishes itself through its integrated infrastructure, which includes container terminals in India, the U.S., and the Gulf, as well as specialized double-stack trains in India, enhancing our offerings in marine and land-based transportation.`}
                    />
                    <Typography variant='h5' sx={{ textAlign: 'start', my: '1rem', color: '#1B1B1F' }}>
                        Navigational Safety and Environmental Responsibility:
                    </Typography>
                    <CustomText text="The paramount duty of a transportation carrier is to securely convey customers' cargo to its destination, maintaining its original condition. Beyond handling standard container freight, we offer technical assistance for the safe transport of hazardous materials and oversized items that cannot fit into containers, ensuring a seamless and secure marine and onshore journey. Furthermore, we are committed to environmental conservation, implementing practices like fuel-efficient cruising to mitigate ship-generated greenhouse gas emissions and employing shore power at our Long Beach, California terminal to eliminate ship fuel consumption." />
                    <Grid container spacing={2} sx={{ mt: '4rem' }}>
                        <Grid item xs={12} sm={4}>
                            <ServicesCard
                                image={ourCommitmentImg}
                                title='Our Commitment'
                                desc=" Our mission is to provide high-quality services and solutions that earn and maintain our customers' trust and loyalty. This is rooted in our core beliefs:"
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <ServicesCard
                                image={customBrokerageImg}
                                title='Custom Brokerage'
                                desc='Muskaan Shipping PTE LTD provides customs brokerage services for inbound and outbound shipments, including customs clearance and door-to-door delivery coordination. We also offer expert consultancy on import-export regulations and have invested in IT systems for efficient Electronic Data Interchange (EDI) with customs authorities.'
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <ServicesCard
                                image={logImg}
                                title='Logistic & Transportation'
                                desc=' Our tailored services in Peninsular Malaysia include a wide range of trucks for prompt pick-up and delivery. We utilize multi-modal options, including road, rail, and water transport, along with a vast network of carriers for rapid response to changing needs.'
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </CompaniesLayout>
    )
}
const totalTradeAmtList = ['$299,230,434,394', '$238,249,762,706', '$60,980,671,688', '73.84%', '66.91%']
