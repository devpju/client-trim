import { Toaster } from 'sonner';
import Routers from './routers/Routers';
import '@fontsource-variable/inter';

const App = () => {
  return (
    <div>
      <Toaster position='top-right' richColors />
      <Routers />
    </div>
  );
};

export default App;
