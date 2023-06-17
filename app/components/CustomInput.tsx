import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../theme';
import Icon from 'react-native-vector-icons/FontAwesome5';

type Props = {
  placeholder?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  iconName?: string;
};

const CustomInput = ({
  placeholder,
  defaultValue,
  onChange,
  iconName,
}: Props) => {
  const [value, setValue] = useState<string | undefined>(defaultValue);
  function onValueChange(txt: string) {
    onChange(txt);
    setValue(txt);
  }
  return (
    <View style={styles.container}>
      {iconName && (
        <Icon
          style={styles.icon}
          name={iconName}
          color={COLORS.WHITE}
          size={25}
        />
      )}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={COLORS.GRAY_600}
        value={value}
        style={styles.inp}
        onChangeText={onValueChange}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  icon: {
    marginLeft: 12,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    borderRadius: SIZES.mediumRadius,
    overflow: 'hidden',
    width: '100%',
    backgroundColor: COLORS.PURPLE,
  },
  inp: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 12,
    color: COLORS.WHITE,
    ...FONTS.h2,
  },
});
