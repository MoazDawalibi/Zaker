import { useEffect } from 'react';
import { useDetectDeviceType } from '../../states/DeviceTypeState';
import DownloadPage from '../DownloadPage'
import { detectDeviceType } from '../../utils/DetectDeviceType';
import { Spin } from 'antd';
import Layout from '../../components/layout/Layout';
import { ExternalRedirect } from '../../utils/ExternalRedirect';
import {  Links } from '../../../data.json';

const Download = () => {
  const { DeviceType, setDeviceType }: any = useDetectDeviceType();

  useEffect(() => {
    setDeviceType(detectDeviceType());
  }, [setDeviceType]);

  if (!DeviceType) {
    return <Spin />;
  }
  return (
    <div className='Download'>
      {
        DeviceType === 'desktop' ? (
          <Layout>
            <DownloadPage /> 
          </Layout>
        ) : (
        <ExternalRedirect url={DeviceType === 'ios' ? Links.apple_store_link : Links.google_play_link} />
        )
      }
    </div>
  )
}

export default Download