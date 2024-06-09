

const TechBar = ({title='dummy', progress='50%'}) => {
    const progressNum = progress.split('%')[0];
    const getProgressTitle = (progressNum)=>{
        let progressTitle='';
        if (progressNum < 50){
            progressTitle='Beginner';
        }
        else if(progressNum == 50 ){
            progressTitle='Intermediate';
        }
        else if(progressNum > 50 ){
            progressTitle='Advanced';
        }
        return progressTitle;
    }
  return (
    <div className=' w-[97%]'>
      <div className=' flex justify-between items-center gap-2'>
      <h6>{title}</h6>
      <h6 className=' capitalize text-[.85rem]'>{getProgressTitle(progressNum)}</h6>
      </div>
      <div className="rounded-s-full rounded-e-full bg-[#243656]">
        <div className='bg-gradient-to-r from-[#3E92CC] from-33% via-[#6978D1] via-67% to-[#945DD6] to-100% px-5 py-2 rounded-s-full rounded-e-full' style={{width: `${progress}`}}></div>
      </div>
    </div>
  )
}

export default TechBar
