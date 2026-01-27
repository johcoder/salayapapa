import ModalCard from "./ModelCard";
import Image from "next/image";

const morningContent = `KUSALI NA PAPA ASUBUHI:
Jiweke katika hali ya ukimya:  Upo mahali patakatifu, unataka kuzungumza na Mungu aliye Mtakatifu sana.
1.	Soma au jikumbushe akilini Nia ya Papa ya Mwezi huo.  Tambua kuwa Kanisa lililo Mwili wa Kristo linakuomba uifanye nia hiyo kuwa yako: Utamani yaliyomo yatendeke, ukusudie kuwa sehemu ya utekelezaji wake na umwombe Mungu akusaidie wewe, Baba Mtakatifu, wanamtandao wote wa Sala na wote wenye mapenzi mema wasaidie kuiishi nia hii.
2.	Soma au jikumbushe sentensi kadhaa zilinazobeba Ujumbe wa Injili ya leo.  Mwombe Kristo akuwezeshe kuishi MAPENZI YA BABA yanayowekwa bayana katika Injili.  Omba mapenzi ya Baba yatimizwe kwa sala “Baba Yetu”.
3.	Fanya majitoleo yako ya kila siku.
(hii iwe kati ya dakika 5 hadi 10, ikiwezekana iwe mbele ya Ekaristi Takatifu, au mara baada ya Misa)
`;

const afternoonContent = `KUSALI SALA YA MCHANA
Jiweke katika hali ya ukimya:  Upo katika muda mtakatifu, pamoja na Mwana wa Mungu aliye hai.
1.	Tambua kuwa Kristo, MWANA WA MUNGU yupo pamoja nawe katika maisha yako. Jikumbushe au tambua mwito ulio katika Injili ya leo.
2.	Soma au Jikumbushe nia ya Sala ya Baba Mtakatifu mwezi huu, kisha:
Sali Sala ya Papa ya Mwezi huu kwa maneno ya Baba Mtakatifu (ikishindikana tumia maneno yako mwenyewe)
3.	Mwombe MAMA MARIA, MALKIA WA MITUME awe nawe katika sala na maisha ya kuwa mtume wa Kristo Mwanaye: Sali:  Salamu Maria…
`;

const eveningContent = `KUSALI SALA YA JIONI
Jiweke katika hali ya ukimya:  Ziweke pembeni sauti nyingi zisizo muhimu zinazokufikia.  Wewe ni Hekalu la Roho Mtakatifu.
1.	Tambua kuwa umepewa zawadi ya ROHO MTAKATIFU aliye nawe kila wakati, na anayekuwezesha kuutazama ulimwengu kwa macho kama ya Kristo, macho ya huruma kwa ulimwengu.
2.	Chunguza majitoleo yako:
•	Ulimtolea Mungu yote, je ndivyo ilivyokuwa kiuhalishia au hata hukumkumbuka Mungu katika kunena na kutenda.
•	Kuna mema uliyotenda, kusema au kuwaza, mshukuru Mungu, mwombe akudumishe katika mema.
•	Kuna mabaya uliyotenda, kusema au kuwaza, mwombe Mungu msamaha.  Dhamiria kuomba msamaha kwa uliowakosea na kupata Sakramenti ya Upatanisho.
3.	Mwombe Roho Mtakatifu akufunulie yale uwezayo kuyafanya vizuri zaidi kwa ajili ya upendo kwa watu na utukufu wa Mungu katika maisha yako ya kawaida kila siku.
`;

export default function PrayerCards() {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch py-16 px-4">
      {/* Morning */}
      <ModalCard
        title="KUSALI NA PAPA ASUBUHI"
        symbol={
          <div className="w-20 h-20 relative">
            <Image
              src="/asubuhi.jpg"
              alt="Morning Sunrise"
              fill
              className="object-contain"
            />
          </div>
        }
        content={morningContent}
      />

      {/* Afternoon */}
      <ModalCard
        title="KUSALI SALA YA MCHANA"
        symbol={
          <div className="w-20 h-20 relative">
            <Image
              src="/mchana.jpg"
              alt="Afternoon Sun"
              fill
              className="object-contain"
            />
          </div>
        }
        content={afternoonContent}
      />

      {/* Evening */}
      <ModalCard
        title="KUSALI SALA YA JIONI"
        symbol={
          <div className="w-20 h-20 relative">
            <Image
              src="/jion.jpg"
              alt="Evening Moon"
              fill
              className="object-contain"
            />
          </div>
        }
        content={eveningContent}
      />
    </div>
  );
}

