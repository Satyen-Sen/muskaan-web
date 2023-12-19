import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import CompaniesLayout from '../CompaniesLayout'
import shippingBg from '@/assets/companies/shipping-llc-bg.webp'
import titleImg from '@/assets/companies/muskaan_shipping_llc/shipping.png'
import airFreightImg from '@/assets/companies/muskaan_shipping_llc/air_freight.png'
import oceanFreightImg from '@/assets/companies/muskaan_shipping_llc/ocean_freight.png'
import landTranportImg from '@/assets/companies/muskaan_shipping_llc/land_transportation.png'
import visionBg from '@/assets/companies/vision.webp'
import visionIcon from '@/assets/companies/vision_icon.png'
import CustomText from '@/components/companies/CustomText'
import ServicesCard from '@/components/companies/ServicesCard'
import { CoreValuesData } from '@/data/companiesData'
import StatisticsCard from '@/components/companies/StatisticsCard'
import VisibilityTracker, { AnimationType } from '@/components/VisibilityTracker'
import ServicesCardMobile from '@/components/companies/ServicesCardMobile'

function ValuesBox({ image, title, desc }: { image: string | StaticImageData; title: String; desc: String }) {
    const [hovered, setHovered] = React.useState(false)

    const handleMouseEnter = () => {
        setHovered(true)
    }

    const handleMouseLeave = () => {
        setHovered(false)
    }
    return (
        <Box
            sx={{
                bgcolor: '#FFFFFF',
                borderRadius: '1rem',
                p: '1.25rem',
                height: '16rem',
                transition: 'transform 0.4s', // Add a transition for transform
                transform: hovered ? 'scale(1.1)' : 'scale(1)',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Image src={image} alt='' style={{ height: 'auto', width: '3.5rem' }} />
            <Typography variant='h6' sx={{ textAlign: 'center', my: '1rem', color: '#1B1B1F', fontWeight: 600 }}>
                {title}
            </Typography>
            <Typography variant='body1' sx={{ mb: '1rem', color: '#1B1B1F', fontWeight: 300 }}>
                {desc}
            </Typography>
        </Box>
    )
}
export default function Home() {
    const theme = useTheme()
    const mobileMode = useMediaQuery('(max-width:599px)')
    const customMobileMode = useMediaQuery('(min-width:600px) and (max-width:699px)')

    return (
        <CompaniesLayout
            image={shippingBg}
            title='Muskan Shipping LLC'
            subtitle='جهد الشحن والخدمات اللوجستية'
            companyName='MUSKAN SHIPPING LLC'
            mapSrc={
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15145022.136160396!2d67.03364636869956!3d22.068134271266782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f432a3cfe94f7%3A0x70f0d50a6e4cbbac!2sMUSKAAN+SHIPPING+LLC!5e0!3m2!1sen!2sin!4v1561552755032!5m2!1sen!2sin'
            }
            address='Mohammed Noor Talib Bldg.,701, 7th floor, Khaleed bin waleed Road Opp.Royal Ascot Hotel Burdubai,PO Box : - 128160 Dubai'
            telephoneNumber='+97143511215'
            emailId='Dubai@muskan-group.com'
        >
            <Box sx={{ px: { xs: theme.spacing(2), sm: theme.spacing(4), md: theme.spacing(12) } }}>
                <Container maxWidth='xl' disableGutters>
                    <Typography variant='h2' sx={{ mb: '1rem', color: '#1B1B1F' }}>
                        About Us
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <CustomText text='Muskan Shipping LLC, based in the vibrant city of Dubai, is committed to excellence in the shipping and logistics industry. Our seasoned team brings decades of experience and expertise, ensuring the highest level of service quality and customer satisfaction. We have strategically invested in expanding our business reach, fostering trade growth, and harnessing cutting-edge technology to provide innovative solutions to our clients. With a strong global presence and strategic partnerships in North America, South America, Europe, the USA, Far East, North East Asia, South East Asia, CIS, East Africa, West Africa, and the Middle East, we are well-positioned to meet the diverse needs of our clients on a global scale. Muskan Shipping LLC is dedicated to creating a customer-oriented environment and delivering top-notch services worldwide.' />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Image src={titleImg} alt='' style={{ width: '100%', height: 'auto' }} />
                        </Grid>
                    </Grid>
                    <Typography variant='h3' sx={{ textAlign: 'start', mt: '4rem', color: '#1B1B1F' }}>
                        Core Values
                    </Typography>
                    <Box sx={{ my: theme.spacing(3) }}>
                        <Box sx={{ mt: theme.spacing(3) }}>
                            <Grid container spacing={2}>
                                <Grid item sm={4} xs={6}>
                                    <ValuesBox
                                        key={CoreValuesData[0].id}
                                        image={CoreValuesData[0].image}
                                        title={CoreValuesData[0].title}
                                        desc={CoreValuesData[0].desc}
                                    />
                                </Grid>
                                <Grid item sm={4} xs={6}>
                                    <ValuesBox
                                        key={CoreValuesData[1].id}
                                        image={CoreValuesData[1].image}
                                        title={CoreValuesData[1].title}
                                        desc={CoreValuesData[1].desc}
                                    />
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    <Box
                                        sx={{
                                            px: {
                                                xs: theme.spacing(6),
                                                sm: theme.spacing(0),
                                            },
                                        }}
                                    >
                                        <ValuesBox
                                            key={CoreValuesData[2].id}
                                            image={CoreValuesData[2].image}
                                            title={CoreValuesData[2].title}
                                            desc={CoreValuesData[2].desc}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box
                                        sx={{
                                            pl: {
                                                sm: theme.spacing(8),
                                                md: theme.spacing(12),
                                                xl: theme.spacing(8),
                                            },
                                        }}
                                    >
                                        <ValuesBox
                                            key={CoreValuesData[3].id}
                                            image={CoreValuesData[3].image}
                                            title={CoreValuesData[3].title}
                                            desc={CoreValuesData[3].desc}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box
                                        sx={{
                                            pr: {
                                                sm: theme.spacing(8),
                                                md: theme.spacing(12),
                                                xl: theme.spacing(8),
                                            },
                                        }}
                                    >
                                        <ValuesBox
                                            key={CoreValuesData[4].id}
                                            image={CoreValuesData[4].image}
                                            title={CoreValuesData[4].title}
                                            desc={CoreValuesData[4].desc}
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>

                    <Typography variant='h3' sx={{ textAlign: 'start', mt: '6rem', mb: '2rem', color: '#1B1B1F' }}>
                        Statistics
                    </Typography>
                    <StatisticsCard exporterRank={15} importerRank={17} tradeBalanceRank={6} totalTradeAmtList={totalTradeAmtList} />
                </Container>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    position: 'relative',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: mobileMode ? 'center' : 'start',
                }}
            >
                <Image src={visionBg} alt='' style={{ height: 'auto', width: mobileMode ? '180%' : '100%' }} />
                <Box
                    sx={{
                        textAlign: 'start',
                        position: 'absolute',
                        px: { xs: theme.spacing(2), sm: theme.spacing(4), md: theme.spacing(12) },
                        width: { xs: '100%', sm: '80%', md: '60%' },
                    }}
                >
                    <Image src={visionIcon} alt='' style={{ height: '3.25rem', width: 'auto' }} />
                    <VisibilityTracker animationType={AnimationType.COLLAPSE} timeout={1500}>
                        <Typography variant='h3' sx={{ textAlign: 'start', mt: '2rem', mb: '1rem', color: '#FFFFFF', fontWeight: 600 }}>
                            Our Vision
                        </Typography>
                    </VisibilityTracker>
                    <VisibilityTracker animationType={AnimationType.FADE} timeout={2000}>
                        <Typography variant='subtitle2' sx={{ textAlign: 'start', color: '#FFFFFF', fontWeight: 300 }}>
                            We aim to achieve what multinational forwarders cannot: meeting our customers' Critical Success Factors. Our
                            ambition is entirely customer-centric, recognizing that our customers have the freedom to choose their service
                            provider.
                        </Typography>
                    </VisibilityTracker>
                </Box>
            </Box>
            <Box sx={{ px: { xs: theme.spacing(2), sm: theme.spacing(4), md: theme.spacing(12) } }}>
                <Container maxWidth='xl' disableGutters>
                    <Typography variant='h3' sx={{ textAlign: 'start', mt: '4rem', mb: '1rem', color: '#1B1B1F' }}>
                        Our Services
                    </Typography>
                    <Typography variant='h5' sx={{ textAlign: 'start', mt: '2rem', mb: '0.5rem', color: '#1B1B1F' }}>
                        Shipping Liner Agency-NVOCC:
                    </Typography>
                    <CustomText text='Muskan Shipping, headquartered in Dubai, is a prominent liner agency in the Middle East representing a diverse range of Non Vessel Operating Common Carriers (NVOCC) principals. Our service seamlessly spans across the Middle East, Upper Gulf, Far East, Europe, and the Indian Subcontinent, ensuring consistent excellence. Our container inventory caters to specific client needs, including Dry containers, Special equipment (Open tops, Flat Racks, Reefer), and ISO tanks. We provide weekly sailings to these destinations, offering creative, tailored shipping solutions at competitive rates. Committed to forging lasting relationships, we enhance value with value-added services for clients and international partners.' />
                    <Typography variant='h5' sx={{ textAlign: 'start', mt: '2rem', mb: '0.5rem', color: '#1B1B1F' }}>
                        Freight Forwarding:
                    </Typography>
                    <CustomText text="Muskan Shipping LLC, located in Dubai, U.A.E., is a dynamic and rapidly expanding NVOCC shipping agency and international freight forwarding company. Our global presence enables us to deliver international shipping and logistics solutions to clients worldwide. Our proficient team of seasoned management professionals, boasting decades of experience in the shipping and freight forwarding industry, oversees the company's operations. We are supported by substantial multimillion-dollar investments earmarked for business expansion, trade development, and cutting-edge technology implementation. With a corporate vision of becoming a preferred integrated global shipping company, we prioritize a customer-centric approach and foster an employee-friendly environment. Our dedicated team of professionals is committed to delivering top-quality services to both international and domestic clients. We have established a robust global network, with key offices and partners strategically located across North America, South America, Europe, the USA, Far East, North East Asia, South East Asia, CIS, East Africa, West Africa, and the Middle East." />
                    {mobileMode ? (
                        <Box>
                            <ServicesCardMobile
                                image={oceanFreightImg}
                                title='Ocean Freight'
                                desc='We offer reliable global ocean freight solutions to major seaports, utilizing our extensive network and carrier partnerships. Our expertise in handling time-sensitive cargo ensures efficient sea freight services for your shipments worldwide.'
                            />
                            <ServicesCardMobile
                                image={airFreightImg}
                                title='Air Freight'
                                desc='We offer a comprehensive range of air freight solutions, leveraging our global network for efficient export, import, and cross-trade shipments. Our strong partnerships with major airlines ensure guaranteed space and competitive pricing. With a focus on reliability and document preparation, we provide trusted air freight services tailored to your needs.'
                            />
                            <ServicesCardMobile
                                image={landTranportImg}
                                title='Land Transportation'
                                desc='We specialize in both international and domestic land transport logistics within the GCC countries. Our flexible and efficient road services are customized to meet the specific needs of our customers, including container transportation, LTL and FTL services to GCC countries, breakbulk shipments, and heavy equipment transport.'
                            />
                        </Box>
                    ) : (
                        <Grid container spacing={2} sx={{ my: '1rem' }}>
                            <Grid item xs={12} sm={4}>
                                <ServicesCard
                                    image={oceanFreightImg}
                                    title='Ocean Freight'
                                    desc='We offer reliable global ocean freight solutions to major seaports, utilizing our extensive network and carrier partnerships. Our expertise in handling time-sensitive cargo ensures efficient sea freight services for your shipments worldwide.'
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <ServicesCard
                                    image={airFreightImg}
                                    title='Air Freight'
                                    desc={
                                        customMobileMode
                                            ? 'We offer a comprehensive range of air freight solutions, leveraging our global network for efficient export, import, and cross-trade shipments. With a focus on reliability and document preparation, we provide trusted air freight services tailored to your needs.'
                                            : 'We offer a comprehensive range of air freight solutions, leveraging our global network for efficient export, import, and cross-trade shipments. Our strong partnerships with major airlines ensure guaranteed space and competitive pricing. With a focus on reliability and document preparation, we provide trusted air freight services tailored to your needs.'
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <ServicesCard
                                    image={landTranportImg}
                                    title='Land Transportation'
                                    desc={
                                        customMobileMode
                                            ? 'We specialize in comprehensive land transport logistics within GCC countries. Our flexible road services cater to customer needs, offering container transportation, LTL and FTL services to GCC countries, breakbulk shipments, and heavy equipment transport.'
                                            : 'We specialize in both international and domestic land transport logistics within the GCC countries. Our flexible and efficient road services are customized to meet the specific needs of our customers, including container transportation, LTL and FTL services to GCC countries, breakbulk shipments, and heavy equipment transport.'
                                    }
                                />
                            </Grid>
                        </Grid>
                    )}
                    <Typography variant='h5' sx={{ textAlign: 'start', mt: '2rem', mb: '0.5rem', color: '#1B1B1F' }}>
                        Project Logistics:
                    </Typography>
                    <CustomText text='In the complex world of project logistics, we excel in providing professional services for mobilizing and shipping project cargos. With our expertise, we meet HSC service standards, ensuring competitive pricing. Our specialized services encompass project logistics, heavy lifts, chartering, break bulk, Ro-Ro shipments, barge and tug shipments, heavy haul land transport, route surveys, rail service, and cargo insurance.' />

                    <Typography variant='h5' sx={{ textAlign: 'start', mt: '2rem', mb: '0.5rem', color: '#1B1B1F' }}>
                        Customs Clearance:
                    </Typography>
                    <CustomText text='Our devoted team ensures swift customs clearance for your cargo at all UAE ports, airports, and land terminals. We offer a range of services including import duty assessment, temporary and permanent import/export procedures, various customs declarations, and multimodal and transit formalities such as ship-shore-ship, sea-air, and more.' />
                </Container>
            </Box>
        </CompaniesLayout>
    )
}
const totalTradeAmtList = ['$425,159,796,503', '$347,528,997,702', '$77,630,798,801', '95.93%', '70.65%']
