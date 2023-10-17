import { Form } from 'react-bootstrap';
import { qrLevels } from '../../constants/quLevels';

const LevelSelect = ({ setQrLevel }) => {
  return (
    <Form.Select
      aria-label='select level of QR code'
      defaultValue='L'
      onChange={(e) => {
        setQrLevel(e.target.value);
      }}
    >
      {qrLevels.map(({ value, label }) => {
        return (
          <option key={label} value={value}>
            {value}
          </option>
        );
      })}
    </Form.Select>
  );
};

export default LevelSelect;
