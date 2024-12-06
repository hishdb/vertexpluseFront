import { useTranslation } from "react-i18next";


function Crypto() {
    const { t } = useTranslation();
    return <>
    <div>
    <h1>Crypto {t("officialPartner")}</h1>
    
    </div>

    </>
}

export default Crypto;