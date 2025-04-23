import BPBD_Logo_Text from '../../../../assets/logo/bpbd-text.svg';
import { SOCIAL_LINKS } from './LandingFooterLayout.constant';
import { Link } from 'react-router-dom';

const LandingFooterLayout = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border">
      <div className="container mx-auto py-4 px-4">
        <div className="flex flex-col">
          <div className="grid grid-cols-12">
            {/* Logo Section */}
            <div className="col-span-12 lg:col-span-6 mb-6 md:mb-0">
              <Link href="/" className="flex items-center">
                <img
                  src={BPBD_Logo_Text}
                  alt="BI Logo"
                  width={170}
                  height={90}
                />
              </Link>
            </div>

            <div className="col-span-12 lg:col-span-6 md:mt-5 lg:mt-0 lg:text-end">
              <div className="font-sans text-grey opacity-80">
                <h2 className="mb-2 font-bold ">Hubungi Kami</h2>
                <ul>
                  <li>
                    <Link
                      href="https://maps.app.goo.gl/9QcjzqU9k99omvAt5"
                      target="_blank"
                    >
                      <p>
                        Badan Penanggulangan Bencana Daerah (BPBD) Kabupaten
                        Tegal
                      </p>
                      <p>Jl. Gatot Subroto No.8</p>
                      <p>Kabupaten Tegal, Jawa Tengah 52419</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="sm:flex sm:items-center sm:justify-between mt-4">
            <span className="text-sm text-gray-500 sm:text-center">
              © {currentYear} Badan Penanggulangan Bencana Daerah (BPBD)
              Kabupaten Tegal.
            </span>

            <div className="flex mt-4 sm:justify-center sm:mt-0 gap-2">
              {SOCIAL_LINKS.map((item, index) => (
                <Link
                  key={index}
                  target="_blank"
                  href={item.href}
                  className="text-gray-500 hover:text-blue"
                  aria-label={item.name}
                >
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooterLayout;
