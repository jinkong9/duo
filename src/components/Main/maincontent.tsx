import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface board {
  id: number | null;
  title: string;
  content: string;
  date: string;
}

export default function Maincontent() {
  // const [TodayTip, setTodayTip] = useState<Today[]>([]);

  const dummy: board[] = [
    //현재 API 수정중이라 dummy로 연결
    {
      id: 1,
      title: "싱크대에 너무 많은 곰팡이가 껴요",
      content: "여름철이나 비가 와 습해지면 곰팡이가 너무 끼네요 ㅠㅠ",
      date: "2025-09-01",
    },
    {
      id: 2,
      title: "화장실 핑크 곰팡이",
      content: "매일매일 닦거든요 ? 근데 왜이렇게 핑크색 곰팡이가 생기죠",
      date: "2025-09-02",
    },
    {
      id: 3,
      title: "좋은 무드등 추천 !",
      content: "얼마전에 친구한테 선물을 받았는데 너무 좋아서 공유합니다 ~~~",
      date: "2025-09-03",
    },
    {
      id: 4,
      title: "사번제목입니다",
      content: "일번입니다일번입니다일번입니다일번입니다",
      date: "2025-09-03",
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "1%",
    arrows: true,
  };

  // useEffect(() => {
  //   const handleTodayTip = async () => {
  //     try {
  //       const res: AxiosResponse<APIToday> = await api.get("boards/today");
  //       console.log("오늘일기", res.data.data);
  //       setTodayTip(res.data.data);
  //     } catch (err) {
  //       if (err instanceof AxiosError) {
  //         console.log(err.response);
  //       }
  //     }
  //   };
  //   handleTodayTip();
  // }, []);

  return (
    <main>
      <div>
        <h2 className="mt-10 text-center font-bold text-2xl">
          자취생을 위한 다양한 꿀팁 서비스
        </h2>
      </div>
      <div className="w-full max-w-350 mx-auto my-10 p-10 bg-[#FCFFC1] shadow-lg rounded-lg text-center text-xl font-bold">
        오늘의 TIP{" "}
        <Slider {...settings}>
          {dummy.map((item) => (
            <div key={item.id} className="border-gray-300 rounded-3xl p-3">
              <div className="bg-white h-10 border-b text-center flex items-center justify-center p-7">
                <p className="text-xl font-bold">{item.title}</p>
              </div>
              <div className="bg-white h-50 text-center text-sm line-clamp-4 flex items-center justify-center p-2">
                {item.content}
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="mt-20">
        <h2 className="font-bold text-2xl text-center mb-20">
          {" "}
          항상 도움이 되고 옆에서 함께하는 서비스가 되기위해 노력하겠습니다.
        </h2>
      </div>
      <br></br>
    </main>
  );
}
