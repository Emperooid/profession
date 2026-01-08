import {Button} from '@/components/ui/button'
import Photo from '@/subpages/Photo'
import Socials from '@/subpages/Socials'
import Stats from '@/subpages/Stats'
import {FiDownload} from 'react-icons/fi'


const Home = () => {
  return (
    <section className='h-full m-5'>
        <div className='container mx-auto h-full '>
            <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
                <div className='text-center xl:text-left order-2 xl:order-0'>
                    <span className='text-xl'>Software Engineer</span>
                    <h1 className='h1'>Hello I&apos;m
                        <br/>
                        <span className='text-accent'>Emmanuel Awosika</span>
                    </h1>
                    <p className='max-w-[500px] mb-9 text-white/85'>
                        I build scalable and efficient web applications with a focus on performance and user experience.
                    </p>
                    <div className='flex flex-col xl:flex-row items-center gap-8'>
                        <Button variant='outline' size='lg' className="uppercase flex items-center gap-2">
                            <span>Download CV</span>
                             <FiDownload className='text-xl' />
                        </Button>
                        <div className='mb-8 xl:mb-0'>
                            <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
                        </div>
                           
                    </div>
                </div>
                <div>
                    <Photo className="order-1 xl:order-0 mb-8 xl:mb-0" />
                </div>
            </div>
        </div>
        <Stats />
    </section>
  )
}

export default Home
