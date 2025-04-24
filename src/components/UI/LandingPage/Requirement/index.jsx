import PersyaratanImg from '../../../../assets/image/persyaratan.svg';
import { Card, CardBody } from '@heroui/react';

const Requirement = () => {
  return (
    <section id="persyaratan" className=" md:mb-10 pt-14">
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-6 hidden lg:flex  md:m-10 items-center">
          <img src={PersyaratanImg} alt="Persyaratan" />
        </div>

        <div className="col-span-12 lg:col-span-6 mt-6">
          <h1 className="text-[40px] md:text-5xl leading-tight text-center mb-5">
            Persyaratan
          </h1>
          <Card className="border-dashed border-2 shadow-md border-primary bg-slate-50 p-4">
            <CardBody>
              <ol className="list-decimal list-inside text-base text-black font-sans">
                <li>
                  Surat Pengantar dari Universitas/Sekolah.
                  <ul className="list-disc list-inside ml-6">
                    <li>
                      Keterangan data mahasiswa/siswa (Nama, NIM/NIS,
                      Fakultas/Program Studi/Jurusan, Semester/Kelas)
                    </li>
                    <li>Durasi dan Periode Magang</li>
                    <li>Fotokopi transkrip nilai semester terakhir</li>
                  </ul>
                </li>
                <li>
                  Proposal Individu
                  <ul className="list-disc list-inside ml-6">
                    <li>Data diri lengkap (CV)</li>
                    <li>
                      Motivation Letter (menjelaskan maksud dan tujuan Magang,
                      harapan atau target yang akan dicapai).
                    </li>
                  </ul>
                </li>
              </ol>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Requirement;
