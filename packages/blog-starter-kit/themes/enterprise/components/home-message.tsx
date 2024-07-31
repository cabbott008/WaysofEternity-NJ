import React from 'react';

export const HomeMessage = () => {

  return (
    <section className="col-span-2">
			<p className="pb-10 pl-20 pr-20 text-center text-xl">&quot;Ask for the ancient paths, where the good way is; and walk in it, and find rest for your souls.&quot; - Jeremiah 6:16</p>
      <div className="rounded-lg bg-russian-violet p-4">
        <h1 className="text-satin-gold text-4xl font-bold text-center">May the Lamb that was Slain Receive the Reward of His Suffering!</h1>
        <p className="text-white p-4 font-semibold text-center">The Moravian Missionaries spoke these words as they sold themselves into slavery in 1732, showing by action their true priorities matched their words. May ours also!</p>
        <div className=" bg-satin-gold rounded-lg pl-8 pr-8 pb-8 pt-5">
          <h2 className="text-blood-red text-4xl text-center font-extrabold pb-5">Four Pillars</h2>
          <div className="gap-8 grid grid-cols-1 lg:grid-cols-2">
            <div className="border-0 border-blue-600 rounded-3xl p-4 col-span-1 grid-cols-1 bg-onyx-gray justify-items-center">
              <h3 className="text-center text-2xl font-bold text-royal-blue pb-2">Our Creator</h3>
              <p className="text-center text-white">1 Timothy 4:1 says, &quot;Now the Spirit speaketh expressly, that in the latter times some shall depart from the faith, giving heed to seducing spirits, and doctrines of devils.&quot; This pillar is all about who our Creator is, how we relate to Him, and what He expects of us. Let&apos;s not mess this one up!</p>
            </div>
            <div className="border-0 border-blue-600 rounded-3xl p-4 col-span-1 grid-cols-2 bg-onyx-gray justify-items-center">
              <h3 className="text-center text-2xl font-bold text-royal-blue pb-2">The Family</h3>
              <p className="text-center text-white">The family is the basic building block of the Kingdom. Without strong families built on the foundation of the Scriptures, the spiritual energy is drained out of the home. When divine order prevails, synergistic power is released exponentially that extends well beyond the home.</p>
            </div>
            <div className="border-0 border-blue-600 rounded-3xl p-4 col-span-1 grid-cols-3 bg-onyx-gray justify-items-center">
              <h3 className="text-center text-2xl font-bold text-royal-blue pb-2">Authority</h3>
              <p className="text-center text-white">Yah is building an assembly that the gates of hell shall not prevail against. Deliverance, healing, finances, signs and wonders should be common in the Kingdom. It is time we stop trusting in the arm of the flesh and live in the power of the Spirit. For in Him we do live, move, and have our being.</p>
            </div>
            <div className="border-0 border-blue-600 rounded-3xl p-4 col-span-1 grid-cols-4 bg-onyx-gray justify-items-center">
              <h3 className="text-center text-2xl font-bold text-royal-blue pb-2">Fellowship</h3>
              <p className="text-center text-white">True fellowship is not achieved by simply being in the same place or listening to the same person. &quot;And He Himself gave some to be apostles, some prophets, some evangelists, and some pastors and teachers, for the equipping of the saints for the work of ministry.&quot; This involves playing active roles!</p>
            </div>
          </div>
          <div className="text-center p-4 mt-8 rounded-3xl bg-blood-red">
            <button className="text-russian-violet rounded-full bg-satin-gold text-2xl font-bold mb-2 pl-2 pr-2">Prayer Needed?</button>
            <p className="text-white">We believe that divine healing, deliverance, supernatural provision, signs, and wonders are still available today. If you need prayer, click above to request a time for prayer via Zoom or phone.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
