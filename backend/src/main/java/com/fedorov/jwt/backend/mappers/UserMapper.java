package com.fedorov.jwt.backend.mappers;

import com.fedorov.jwt.backend.dtos.SignUpDto;
import com.fedorov.jwt.backend.dtos.UserDto;
import com.fedorov.jwt.backend.entites.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);

    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto signUpDto);

}
