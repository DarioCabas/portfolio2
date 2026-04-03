import dynamic from 'next/dynamic';
import styled, { keyframes } from 'styled-components';
import config from '@/config';

const QRCode = dynamic(() => import('react-qr-code').then((m) => m.default ?? m), { ssr: false });

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.9) translateY(10px); }
  to   { opacity: 1; transform: scale(1)   translateY(0); }
`;

const Card = styled.div`
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 500;
  padding: 14px;
  border-radius: ${(props) => props.theme.borderRadius};
  background: rgba(18, 14, 38, 0.9);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(6, 147, 227, 0.2);
  box-shadow:
    0 16px 48px rgba(0, 0, 0, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  animation: ${fadeIn} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: rgba(6, 147, 227, 0.4);
    box-shadow:
      0 20px 60px rgba(0, 0, 0, 0.55),
      0 0 20px rgba(6, 147, 227, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.07);
  }

  @media (max-width: ${(props) => props.theme.breakpoints?.sm}) {
    bottom: 16px;
    right: 16px;
    padding: 10px;
  }
`;

const QrFrame = styled.div`
  padding: 10px;
  border-radius: 8px;
  background: #ffffff;
  display: block;
  line-height: 0;
`;

const Label = styled.p`
  font-family: ${(props) => props.theme.fontFamily?.fontMono};
  font-size: ${(props) => props.theme.fontSize?.xxs};
  color: ${(props) => props.theme.text?.accent};
  text-align: center;
  margin-top: 8px;
  letter-spacing: 0.04em;
`;

const QrWidget = () => {
  const { email } = config;

  return (
    <Card aria-label="Scan QR code to send an email">
      <QrFrame>
        <QRCode
          value={`mailto:${email}`}
          size={100}
          bgColor="#ffffff"
          fgColor="#120e26"
          level="M"
        />
      </QrFrame>
      <Label>Scan to email me</Label>
    </Card>
  );
};

export default QrWidget;
