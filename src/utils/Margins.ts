import { StatusBar } from 'react-native';

class Margins {
  private constructor() {}

  public static MARGINS = {
    small: 4,
    medium: 8,
    regular: 16,
    large: 32,
    statusBar: StatusBar.currentHeight || 16,
  };

  public static RADIUS = {
    small: 4,
    max: 100,
  };
}

export default Margins;
