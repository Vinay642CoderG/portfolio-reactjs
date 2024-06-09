import Header from '../components/Header'
import Btn from '../components/Btn'
import ProjectCard from '../components/ProjectCard'
import TechBar from '../components/TechBar'
import Footer from '../components/Footer'

const Index = () => {
  return (
    <div className=' text-white min-[768px]:mx-5 min-[768px]:my-2 max-[768px]:m-2'>
      <Header/>
      <div className='max-[768px]:mx-2 max-[768px]:mt-8 min-[768px]:mx-[5rem] min-[768px]:mt-[5rem]'>
        <h1 className='font-semibold text-3xl'>Lorem ipsum dolor sit amet.</h1>
        <p className=' m-5 text-wrap max-w-[25rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem amet, explicabo eveniet tempore harum sunt mollitia nam animi quam cum.</p>
        <Btn ct_className='m-5' text='click me'/>
        {/* Projects section starts  */}
        <div className='min-[768px]:mt-[7rem] max-[768px]:mt-[5rem] max-[768px]:ms-3'>
          <h2 className=' font-semibold text-2xl'>Projects</h2>
          <div className='min-[768px]:ms-8 min-[768px]:my-8 max-[768px]:m-3 flex justify-center flex-wrap gap-8'>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
          </div>
        </div>
        {/* Projects section ends  */}
        {/* Technologies section starts  */}
        <div className='min-[768px]:mt-[7rem] max-[768px]:mt-[5rem]'>
          <h2 className=' font-semibold text-2xl' id='technologies'>Technologies</h2>
          <div className='min-[768px]:ms-8 min-[768px]:my-8 max-[768px]:m-3 flex flex-wrap gap-8'>
            <TechBar title='Html' progress='70%' />
            <TechBar title='Css, Sass & Bootstrap' progress='70%' />
            <TechBar title='Javascript, Typscript, JQuery' progress='70%' />
            <TechBar title='UI design in Figma' progress='50%' />
            <TechBar title='Angular' progress='40%' />
            <TechBar title='React' progress='40%' />
            <TechBar title='React Native' progress='40%' />
          </div>
          <h2 className='min-[768px]:mt-[7rem] max-[768px]:mt-[5rem] font-semibold text-2xl'>Additional technologies and skills</h2>
          <div className=' min-[768px]:ms-[5rem] min-[768px]:mt-[2rem] max-[768px]:ms-10 flex justify-start min-[768px]:gap-[10rem] max-[768px]:flex-col max-[768px]:gap-3 max-[768px]:flex-nowrap items-start flex-wrap'>
            <ul className=' list-disc font-medium flex flex-col gap-3'>
            <li>Git</li>
            <li>Wordpress</li>
            <li>Teamwork</li>
            </ul>
            <ul className=' list-disc font-medium flex flex-col gap-3'>
            <li>B2 english</li>
            <li>Quick Learning</li>

            </ul>
            <ul className=' list-disc font-medium flex flex-col gap-3'>
            <li>RWD</li>
            <li>Engagement</li>
            </ul>
          </div>
        </div>
        {/* Technologies section ends  */}
        {/* About Me section starts  */}
        <div className='min-[768px]:mt-[7rem] max-[768px]:mt-[5rem]'>
          <h2 className=' font-semibold text-2xl' id='about-me'>About Me</h2>
          <div className=' flex justify-center items-center'>
            <ul className=' max-[768px]:ms-10 max-[768px]:mt-3 min-[768px]:ms-[5rem] min-[768px]:mt-[3rem] list-disc font-medium flex flex-col gap-3'>
              <li><span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, officiis. Non natus fugiat vero excepturi. Adipisci est aliquam voluptatibus quisquam natus nulla iste in optio!</span></li>
              <li><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eum ab tenetur, recusandae tempore sunt numquam quibusdam id? Tenetur similique accusamus esse perspiciatis magni unde.</span></li>
              <li><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eum ab tenetur, recusandae tempore sunt numquam quibusdam id? Tenetur similique accusamus esse perspiciatis magni unde.</span></li>
              <li><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eum ab tenetur, recusandae tempore sunt numquam quibusdam id? Tenetur similique accusamus esse perspiciatis magni unde.</span></li>
              <li><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eum ab tenetur, recusandae tempore sunt numquam quibusdam id? Tenetur similique accusamus esse perspiciatis magni unde.</span></li>
            </ul>
          </div>
        </div>
        {/* About Me section ends  */}
      </div>
      <Footer />
    </div>
  )
}

export default Index
