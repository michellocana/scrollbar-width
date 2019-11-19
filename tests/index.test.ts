import { scrollbarWidth } from '../src/index';

const isLinux = navigator.appVersion.indexOf('Linux') != -1;

describe('scrollbarWidth', () => {
  beforeEach(() => {
    scrollbarWidth.__cache = undefined;
  });

  it('should be defined', () => {
    expect(scrollbarWidth).toBeDefined();
  });

  it('should return proper numeric value', () => {
    const res = scrollbarWidth();

    expect(typeof res).toBe('number');
    expect(res).toBe(isLinux ? 15 : 17); // have no idea what the values for MacOS
  });

  it('should return cached value if presented', () => {
    scrollbarWidth.__cache = 0;
    expect(scrollbarWidth()).toBe(0);
    scrollbarWidth.__cache = 1;
    expect(scrollbarWidth()).toBe(1);
    scrollbarWidth.__cache = 2;
    expect(scrollbarWidth()).toBe(2);
    scrollbarWidth.__cache = 3;
    expect(scrollbarWidth()).toBe(3);
  });

  it('should recalculate and cache value if true passed as first element', () => {
    scrollbarWidth.__cache = 3;
    expect(scrollbarWidth(true)).toBe(isLinux ? 15 : 17);
  });
});
