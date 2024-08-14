
        public class _13_Trapping_Rainwater_Self_Approach {

            public static void main(String[] args) {
                // TODO Auto-generated method stub
                int height[] = { 4, 2, 0, 3, 2, 5 };
                System.out.print(Volume(height));
            }
            public static int Volume(int height[]) {
                int l[] = new int[height.length];
                for (int i = 0; i < l.length; i++) {
                    l[i] = i;
                    for (int j = i - 1; j >= 0; j--) {
                        if (height[j] > height[l[i]]) {
                            l[i] = j;
                        }
                    }
                }
                int r[] = new int[height.length];
                for (int i = 0; i < r.length; i++) {
                    r[i] = i;
                    for (int j = i + 1; j < height.length; j++) {
                        if (height[j] > height[r[i]]) {
                            r[i] = j;
                        }
                    }
                }
                int volume = 0;
                for (int i = 0; i < l.length; i++) { // Can write r.length as well in place of l.length
                    if (i != 0 && l[i] == r[i]) {
                        continue;
                    } else if (i != 0 && l[i] == l[i - 1] && r[i] == r[i - 1]) {
                        for (int j = 2; i - j >= 0; j++) {
                            if (l[i] == l[i - j] && r[i] == r[i - j]) {
                                break;
                            } else {
                                for (int k = l[i] + 1; k < r[i]; k++) {
                                    volume = volume - height[k];
                                }
                            }
                        }
                    } else {
                        int h = Math.min(height[l[i]], height[r[i]]); // I by mistakenly wrote [int h = Math.min(l[i], r[i]);]
                        // here
                        volume = volume + (h * (r[i] - l[i] - 1));// I wrote [volume = volume + (h * (l[i] - r[i] - 1));] by mistake // Can't use "[]" for arithmetic operations like this as
                        // normal brackets as they might mean something else
                    }
                }
                return volume;
            }

        }
