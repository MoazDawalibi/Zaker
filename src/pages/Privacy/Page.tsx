import { Privacy as PrivacyInfo } from '../../../data.json';

const Page = () => {
  const PrivacyDataEn = PrivacyInfo.En;
  const PrivacyDataAr = PrivacyInfo.Ar;
  return (
    <>
    <div className='privacy Privacy_en'>
      <h2>{PrivacyDataEn.title}</h2>

      <div className='introduction'>
        <h5>{PrivacyDataEn.Introduction}</h5>
        <p>{PrivacyDataEn['Point Ltd. (\'we\', \'our\', or \'us\') respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the Zaker application (\'App\'). Please read this policy carefully to understand our views and practices regarding your personal data.']}</p>
      </div>

      <div>
        <h5>{PrivacyDataEn.subTitle1}</h5>
        <h6>{PrivacyDataEn.subTitleDesc1}</h6>
        <h4>{PrivacyDataEn['Personal Data:']}</h4>
        <p>{PrivacyDataEn.Personal_Data_Body.zero}</p>
        <p>{PrivacyDataEn.Personal_Data_Body.first}</p>
        <p>{PrivacyDataEn.Personal_Data_Body.second}</p>
        <p>{PrivacyDataEn.Personal_Data_Body.third}</p>
        <p>{PrivacyDataEn.Personal_Data_Body.fourth}</p>
        <p>{PrivacyDataEn.Personal_Data_Body.fifth}</p>
        <p>{PrivacyDataEn.Personal_Data_Body.sixes}</p>
      </div>

      <div>
        <h4>{PrivacyDataEn['Data from App Usage:']}</h4>
        <p>{PrivacyDataEn['Data from App Usage'].first}</p>
        <p>{PrivacyDataEn['Data from App Usage'].second}</p>
      </div>

      <div>
        <h4>{PrivacyDataEn['Additional Indirect Data:']}</h4>
        <p>{PrivacyDataEn['Additional Indirect Data'].first}</p>
      </div>


      <div>
        <h5>{PrivacyDataEn.subTitle2}</h5>
        <p>{PrivacyDataEn['Data Collection Methods'].first}</p>
        <p>{PrivacyDataEn['Data Collection Methods'].second}</p>
        <p>{PrivacyDataEn['Data Collection Methods'].third}</p>
      </div>

      <div>
        <h5>{PrivacyDataEn.subTitle3}</h5>
        <h6>{PrivacyDataEn.subTitleDesc3}</h6>
        <p>{PrivacyDataEn['Purpose of Data Collection'].first}</p>
        <p>{PrivacyDataEn['Purpose of Data Collection'].second}</p>
        <p>{PrivacyDataEn['Purpose of Data Collection'].third}</p>
      </div>

      <div>
        <h5>{PrivacyDataEn.subTitle4}</h5>
        <h6>{PrivacyDataEn.subTitleDesc4}</h6>
        <p>{PrivacyDataEn['Data Sharing'].first}</p>
        <p>{PrivacyDataEn['Data Sharing'].second}</p>
      </div>

      <div>
        <h5>{PrivacyDataEn.subTitle5}</h5>
        <h6>{PrivacyDataEn.subTitleDesc5}</h6>
      </div>

      <div>
        <h5>{PrivacyDataEn.subTitle6}</h5>
        <p>{PrivacyDataEn['Data Storage'].first}</p>
        <p>{PrivacyDataEn['Data Storage'].second}</p>
      </div>

      <div>
        <h5>{PrivacyDataEn.subTitle7}</h5>
        <h6>{PrivacyDataEn.subTitleDesc7}</h6>
        <p>{PrivacyDataEn['User Rights'].first}</p>
        <p>{PrivacyDataEn['User Rights'].second}</p>
        <p>{PrivacyDataEn['User Rights'].third}</p>
        <p>{PrivacyDataEn['User Rights'].fourth}</p>
      </div>

      <div>
        <h6>{PrivacyDataEn.subTitleDesc8}</h6>
      </div>

      <div>
        <h5>{PrivacyDataEn.subTitle9}</h5>
        <h6>{PrivacyDataEn.subTitleDesc9}</h6>
      </div>

      <div>
        <h5>{PrivacyDataEn.subTitle10}</h5>
        <h6>{PrivacyDataEn.subTitleDesc10}</h6>
      </div>

      <div>
        <h5>{PrivacyDataEn.subTitle11}</h5>
        <h6>{PrivacyDataEn.subTitleDesc11}</h6>
      </div>

      <div>
        <h5>{PrivacyDataEn.subTitle12}</h5>
        <h6>{PrivacyDataEn.subTitleDesc12}  <span> {PrivacyDataEn.email}</span></h6>
      </div>


    </div>


    <div className='privacy Privacy_ar'>
      <h2>{PrivacyDataAr.title}</h2>

      <div className='introduction'>
        <h5>{PrivacyDataAr.Introduction}</h5>
        <p>{PrivacyDataAr['Point Ltd. (\'we\', \'our\', or \'us\') respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the Zaker application (\'App\'). Please read this policy carefully to understand our views and practices regarding your personal data.']}</p>
      </div>

      <div>
        <h5>{PrivacyDataAr.subTitle1}</h5>
        <h6>{PrivacyDataAr.subTitleDesc1}</h6>
        <h4>{PrivacyDataAr['Personal Data:']}</h4>
        <p>{PrivacyDataAr.Personal_Data_Body.zero}</p>
        <p>{PrivacyDataAr.Personal_Data_Body.first}</p>
        <p>{PrivacyDataAr.Personal_Data_Body.second}</p>
        <p>{PrivacyDataAr.Personal_Data_Body.third}</p>
        <p>{PrivacyDataAr.Personal_Data_Body.fourth}</p>
        <p>{PrivacyDataAr.Personal_Data_Body.fifth}</p>
        <p>{PrivacyDataAr.Personal_Data_Body.sixes}</p>
      </div>

      <div>
        <h4>{PrivacyDataAr['Data from App Usage:']}</h4>
        <p>{PrivacyDataAr['Data from App Usage'].first}</p>
        <p>{PrivacyDataAr['Data from App Usage'].second}</p>
      </div>

      <div>
        <h4>{PrivacyDataAr['Additional Indirect Data:']}</h4>
        <p>{PrivacyDataAr['Additional Indirect Data'].first}</p>
      </div>


      <div>
        <h5>{PrivacyDataAr.subTitle2}</h5>
        <p>{PrivacyDataAr['Data Collection Methods'].first}</p>
        <p>{PrivacyDataAr['Data Collection Methods'].second}</p>
        <p>{PrivacyDataAr['Data Collection Methods'].third}</p>
      </div>

      <div>
        <h5>{PrivacyDataAr.subTitle3}</h5>
        <h6>{PrivacyDataAr.subTitleDesc3}</h6>
        <p>{PrivacyDataAr['Purpose of Data Collection'].first}</p>
        <p>{PrivacyDataAr['Purpose of Data Collection'].second}</p>
        <p>{PrivacyDataAr['Purpose of Data Collection'].third}</p>
      </div>

      <div>
        <h5>{PrivacyDataAr.subTitle4}</h5>
        <h6>{PrivacyDataAr.subTitleDesc4}</h6>
        <p>{PrivacyDataAr['Data Sharing'].first}</p>
        <p>{PrivacyDataAr['Data Sharing'].second}</p>
      </div>

      <div>
        <h5>{PrivacyDataAr.subTitle5}</h5>
        <h6>{PrivacyDataAr.subTitleDesc5}</h6>
      </div>

      <div>
        <h5>{PrivacyDataAr.subTitle6}</h5>
        <p>{PrivacyDataAr['Data Storage'].first}</p>
        <p>{PrivacyDataAr['Data Storage'].second}</p>
      </div>

      <div>
        <h5>{PrivacyDataAr.subTitle7}</h5>
        <h6>{PrivacyDataAr.subTitleDesc7}</h6>
        <p>{PrivacyDataAr['User Rights'].first}</p>
        <p>{PrivacyDataAr['User Rights'].second}</p>
        <p>{PrivacyDataAr['User Rights'].third}</p>
        <p>{PrivacyDataAr['User Rights'].fourth}</p>
      </div>

      <div>
        <h6>{PrivacyDataAr.subTitleDesc8}</h6>
      </div>

      <div>
        <h5>{PrivacyDataAr.subTitle9}</h5>
        <h6>{PrivacyDataAr.subTitleDesc9}</h6>
      </div>

      <div>
        <h5>{PrivacyDataAr.subTitle10}</h5>
        <h6>{PrivacyDataAr.subTitleDesc10}</h6>
      </div>

      <div>
        <h5>{PrivacyDataAr.subTitle11}</h5>
        <h6>{PrivacyDataAr.subTitleDesc11}</h6>
      </div>

      <div>
        <h5>{PrivacyDataAr.subTitle12}</h5>
        <h6>{PrivacyDataAr.subTitleDesc12}  <span> {PrivacyDataAr.email}</span></h6>
      </div>


    </div>
    </>
  )
}

export default Page