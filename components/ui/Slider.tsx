import ImageDescriptionSlider from "./ImageDescriptionSlider";

const slides = [
  {
    image: "/mitume/img1.png",
    description:
      "Tukisali pamoja na Mama Malkia wa Mitume",
  },
  {
    image: "/mitume/img2.png",
    description:
      "Tupo na Baba Mtakatifu Khalifa wa Mtume Petro",
  },
  {
    image: "/mitume/img3.png",
    description:
      "Njia ya Moyo inatuweka daima karibu na Moyo Mtakatifu wa Yesu",
  },
   {
    image: "/mitume/put.png",
    description:
      "Tukielekezwa na Yesu Kristu kupitia Neno la Mungu",
  },
  {
    image: "/mitume/img5.jpg",
    description:
      "Tukipewa nguvu na Ekaristi Takatifu, tunayaishi Majitoleo yetu kwa Mungu kila siku",
  },
  {
    image: "/mitume/img6.png",
    description:
      "Kwa ajili ya Ulimwengu na Utume wa Kanisa la Kristo",
  },
];

export default function Section() {
  return (
    <section className="py-16 bg-gray-50">
      <ImageDescriptionSlider slides={slides} />
    </section>
  );
}
