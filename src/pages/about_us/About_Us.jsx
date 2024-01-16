import React from 'react'
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import DashboardImageCover from '../../component/DashboardImageCover';
import Ready from '../dashboard/Ready';

const imgData = [
    { id: 1, imgSrc: '/images/about_us/timeless_design.png', title: 'TIMELESS DESIGN', description: 'Our dedication to crafting furniture with enduring aesthetics is rooted in the belief that true beauty is ageless. Each piece is meticulously designed to seamlessly integrate into diverse interior styles, ensuring a lasting relevance and an enduring appeal.' },
    { id: 2, imgSrc: '/images/about_us/superior_quality.png', title: 'SUPERIOR QUALITY', description: 'Every piece within the dEUR collection is meticulously crafted with precision and care, reflecting a dedication to the artistry of furniture. From the selection of premium materials to the intricate detailing, dEUR exemplifies a relentless pursuit of perfection. ' },
    { id: 3, imgSrc: '/images/about_us/sustainable_materials.png', title: 'SUSTAINABLE MATERIALS', description: 'We take pride in our meticulous selection of materials, prioritizing sustainability without compromising on quality or style. Our furniture is crafted using a diverse range of eco-friendly materials, including responsibly sourced wood, recycled metals, and low-impact finishes.' },
]

const About_Us = () => {
    return (
        <>
            <Header />
            <DashboardImageCover imgSrc="./images/cover/cover.png" />
            <div className="flex justify-center items-center flex-col gap-y-5 text-[#464D5C] my-10 w-full">
                <div className="container flex justify-center items-center flex-col gap-y-5">
                    <h1>The <span className='font-bold'>Brand</span></h1>
                    <p><span className='font-bold'>Established in 2023</span> by a visionary team of four passionate individuals, DEUR Furniture emerged as a symbol of innovation and excellence in the world of home furnishings. The founders, united by a shared vision to redefine interior spaces with timeless design and superior craftsmanship, embarked on a journey to create a brand that transcends trends. With a commitment to providing customers an unparalleled experience, DEUR has seamlessly blended modern aesthetics with enduring quality. From its inception, the brand has rapidly evolved into a trusted name, capturing the essence of both contemporary and classic styles. The founders' dedication to creating furniture that resonates with individuals seeking sophistication and comfort has been the cornerstone of DEUR's success. Today, DEUR Furniture stands as a testament to the collaborative spirit and unwavering commitment of its visionary founders, offering a curated collection that elevates living spaces to new heights.</p>
                </div>
                <div className="flex justify-center items-center w-full">
                    {imgData.map(item => {
                        return (
                            <>
                                <div className="relative flex justify-center items-center flex-col" style={{ height: '500px', width: '100%' }}>
                                    <div className="absolute">
                                        <img key={item.id} src={item.imgSrc} alt="about_us_cover" className='block' />
                                    </div>
                                    <div className="absolute flex justify-center items-center flex-col gap-y-5 p-10">
                                        <h1 className='text-white text-2xl font-bold tracking-widest'>{item.title}</h1>
                                        <p className='text-white font-medium'>{item.description}</p>
                                    <button className="rounded-full border-2 text-white border-white py-2 px-10">See More</button>
                                    </div>

                                </div>
                            </>
                        )
                    })}
                </div>
                <Ready />
            </div>
            <Footer />
        </>
    )
}

export default About_Us;