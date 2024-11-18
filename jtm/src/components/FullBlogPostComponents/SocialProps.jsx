import React from 'react'
import { icons } from './SocialObject'

const SocialProps = () => {
  return (
    <section className="w-full">
      <div className="w-10/12 mx-auto flex gap-2">
        {icons.map((item) => (
          <div
            key={item.id}
            className="w-14 h-14 lg:w-16 lg:h-16 bg-[#ebdfc9] border dark:bg-[#ebdfc9] dark:border-none rounded-full flex justify-center items-center"
            dangerouslySetInnerHTML={{ __html: item.image }}
          ></div>
        ))}
      </div>
    </section>
  )
}

export default SocialProps
