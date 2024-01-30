import { styles } from "../styles";
import { SocialMedia } from ".";
import { SectionWrapper } from "../hoc";

const Hero = () => {

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >


        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Ajay</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm Web Developer <br className='sm:block ' />
            <span className='text-[#915EFF]'>Turning Vision Into Reality With Code</span>
          </p>
          <a
            href='https://drive.google.com/file/d/1VrBtlUugA3JmuIOqWVUYerxsqwys2rBx/view?usp=sharing'
            target='_blank' //
            download='Ajaysaini.pdf'>
            <button className='tracking-wider border-purple-800 border-2 rounded-lg font-medium text-white px-4 py-2 mt-4 text-sm md:text-lg lg:text-xl transition-all duration-300 ease-in-out hover:bg-purple-800 focus:outline-none focus:ring focus:border-purple-900'>
              Download Resume
            </button>
          </a>
          <SocialMedia />
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "home");