import React from 'react'
import Btn from './Btn'

const ProjectCard = () => {
  return (
    <div className=' min-[1024px]:w-[18rem] max-[1024px]:w-[15rem] border border-white p-2 pb-5 rounded-tl-[1.4rem] rounded-br-[1.4rem] shadow-sm shadow-white'>
      <img src="/assets/images/project_thumb.jpg" alt="project1 thumbnail" className=' h-[10rem] w-100 rounded-md' />
      <h4 className=' font-medium text-center p-1 text-lg'>project2</h4>
      <p className='mb-5 text-ellipsis overflow-hidden h-[4.8rem]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet velit architecto facere est, quo sint. Explicabo accusantium quod debitis porro ullam! Suscipit eligendi eius ratione  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio molestiae, assumenda exercitationem ipsam animi optio placeat ducimus beatae magnam ad! Provident minus expedita illo reiciendis rerum nulla alias quaerat dolorem enim, distinctio laboriosam aliquam, mollitia perferendis fuga, laborum perspiciatis omnis? dkdkk.</p>
      <Btn ct_className='' text='Look it up'/>
    </div>
  )
}

export default ProjectCard
