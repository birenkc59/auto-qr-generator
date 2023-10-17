import { qrLevels } from '../../constants/quLevels';

const DirtyAllowed = ({ selectedLevel }) => (
  <b>{qrLevels.find((l) => l.value === selectedLevel).dirtyAllowed}</b>
);

export default DirtyAllowed;
