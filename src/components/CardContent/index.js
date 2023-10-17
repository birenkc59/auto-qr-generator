import { useEffect, useState } from 'react';
import LevelSelect from '../LevelSelect';
import ReactSlider from 'react-slider';
import qrious from 'qrious';
import { Button, Col, Form, Image, InputGroup, Row } from 'react-bootstrap';
import DirtyAllowed from '../DirtyAllowed';

const CardContent = () => {
  const qr = new qrious();
  const [word, setWord] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [qrSize, setQrSize] = useState(300);
  const [qrLevel, setQrLevel] = useState('L');

  useEffect(() => {
    qr.set({
      background: 'white',
      foreground: 'black',
      level: qrLevel,
      padding: 20,
      size: qrSize,
      value: word,
    });
    setQrCode(qr.toDataURL('image/jpeg'));
    // eslint-disable-next-line
  }, [word, qrSize, qrLevel]);

  const handleSelect = (level) => setQrLevel(level);

  return (
    <Row>
      <Col>
        <Form.Label as='div'>Enter text to generate QR code</Form.Label>
        <InputGroup className='mb-3'>
          <Form.Control
            type='text'
            aria-describedby='textDescriptionBox'
            onChange={(e) => {
              setWord(e.target.value);
            }}
            placeholder='Enter text...'
            id='qrText'
            className='textBox'
          />
          <Form.Text id='textDescriptionBox' muted className='fst-italic'>
            As soon as you start typing into the box, this generates a qr code
            which you can use it anywhere to display.
          </Form.Text>
        </InputGroup>
        <Form.Label className='mb-3'>Set QR Size</Form.Label>

        <ReactSlider
          min={256}
          max={512}
          defaultValue={256}
          value={qrSize}
          className='qrRangeSlider'
          thumbClassName='qrRangeSlider-thumb'
          trackClassName='qrRangeSlider-track'
          onChange={(value) => {
            setQrSize(value);
          }}
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        />
        <Form.Label className='d-block mt-2'>Set QR Level</Form.Label>
        <InputGroup className='mb-1'>
          <LevelSelect setQrLevel={handleSelect} />
        </InputGroup>
        <Form.Text id='textDescriptionBox' muted className='fst-italic d-block'>
          Your code allowed for <DirtyAllowed selectedLevel={qrLevel} />
          to be dirty.
        </Form.Text>
        <a href={qrCode} download='QRCode' className='d-inline-block mt-2'>
          <Button variant='text-uppercase' className='downloadButton'>
            Download
          </Button>
        </a>
      </Col>
      <Col>
        <Image src={qrCode} thumbnail />
        <Form.Text muted className='d-block'>
          QR Size: {qrSize} x {qrSize}
        </Form.Text>
      </Col>
    </Row>
  );
};

export default CardContent;
