import homeVideo from '../assets/hbd lia.mp4'
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import { useEffect, useState } from 'react';
import AOS from 'aos';

export default function Home() {
    const [expanded, setExpanded] = useState()
    useEffect(() => {
        AOS.init(({
            duration: 3000
        }))
    }, [])

    const [count, setCount] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (count === 3000) {
                clearInterval(intervalId);
            } else {
                setCount(count + 1);
            }
        }, 1);
        return () => {
            clearInterval(intervalId);
        };
    }, [count]);
    function pad(n) {
        return n < 10 ? "0" + n : n;
    }
    return (
        <div className="home_container">
            <div className="header">
                <p className="header_home" data-aos="fade-down">happy birthday lia sayang( ＾◡＾)っ ♡</p>
                <p className="desc_home" data-aos="fade-down">semoga kamu seneng lihat video ini hehehehe</p>
                <p className="desc_home count" data-aos="fade-down">I Love You <span>{pad(count)} 🖤 </span></p>
                <div className='video_home' data-aos="flip-up">
                    <Video>
                        <source src={homeVideo} type="video/mp4" autoPlay />
                    </Video>
                </div>
            </div>
            <div className='card' data-aos="fade-up">
                <button className='header_card' onClick={() => setExpanded(!expanded)}>
                    {expanded}
                    Dari Jeky Untuk Liaa
                </button>
                <div className='card_text'>
                    <div></div>
                    {expanded
                        ? 'Happyy birthdayy my sweety pretty gurl🖤, Semoga sehatt selaluu panjangg umurr. semogaa yang semuaa harapann liaa tercapaii yaa sayangg. semogaa liaa bisaa jadii yang lebihh baikk ditahunn berikutnyaaa. semogaa semuaa yang liaa harapkann bisaa terkabull aamiin yaa allah. makasih buatt aku bahagiaa teruss yaa sayaangg🥺❤❤. aku selaluu mendoakann liaa yang terbaikk selamanyaa untuk kita berduaa. semoga liaa selaluu di lindunginn allah dari segalaa apapunn, selaluu diberii kesehatan, dilancarkann rezekinyaa, selaluu berbaktii sama umi abah, jangann lupaa selaluu bersyukurr, perbanyakk sayangnyaa ke akuu heheheh, aamiin yaa allah.'
                        : 'Kamu ada pesan dari jeky '}
                </div>

            </div>
        </div >
    )
}