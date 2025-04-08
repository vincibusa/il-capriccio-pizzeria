import { useTranslation } from "react-i18next";
import { FaUtensils, FaCalendarAlt } from "react-icons/fa";

interface CallToActionButtonsProps {
  onReservationClick: () => void;
}

const CallToActionButtons: React.FC<CallToActionButtonsProps> = ({ onReservationClick }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <button
        onClick={onReservationClick}
        className="pizza-btn bg-pizza-gold text-black px-8 py-4 rounded-md shadow-lg hover:shadow-xl active:shadow-md active:translate-y-0.5 transition-all duration-200 flex items-center justify-center"
      >
        <FaCalendarAlt className="mr-2" />
        <span className="font-montserrat font-medium">{t("reservationButton")}</span>
      </button>
      
      <a
        href="/menu.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="pizza-btn bg-black text-white px-8 py-4 rounded-md shadow-lg hover:shadow-xl active:shadow-md active:translate-y-0.5 transition-all duration-200 flex items-center justify-center"
      >
        <FaUtensils className="mr-2" />
        <span className="font-montserrat font-medium">{t("viewMenuButton")}</span>
      </a>
    </div>
  );
};

export default CallToActionButtons;