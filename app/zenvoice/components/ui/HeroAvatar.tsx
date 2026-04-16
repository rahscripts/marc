import FiveStars from "./FiveStars"

export default function HeroAvatar() { 
    return (
          <div className="flex gap-2 mt-3">
                    <div className="avatar-group -space-x-6">
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/profile/demo/wonderperson@192.webp" />
    </div>
  </div>
   <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
    </div>
  </div>
</div>
<div className="flex flex-col items-start gap-2 ">
<FiveStars/>
<div>
    <p>
        1675 founders sleep better
    </p>
</div>
</div>
                </div>
                
            
)}