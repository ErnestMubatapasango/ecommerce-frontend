import Billboard from '@/components/billboard'
import getBillboard from '@/actions/get-billboard'
import React from 'react'
import Container from '@/components/ui/container'


export const revalidate = 0;

const HomePage = async() => {

  const billboard = await getBillboard("65db690ffd0a46bf1b20de0a")
  return (
    <Container>
      <div className='space-y-10 pb-10'> 
        <Billboard  data={billboard}/>
      </div>
    </Container>
  
  )
}

export default HomePage