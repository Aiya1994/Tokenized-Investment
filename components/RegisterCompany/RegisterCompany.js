import {Wrapper, Container, LogoContainer, Form, ContainerForImg, Label, ContainerForContacts, Flex, SiteAdress, SaveAndCancelBtn} from "../RegisterCompany/RegisterCompany.style"
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';


function RegisterCompany() {

    const values = [
        {
            value: 'defaultVal',
            label: 'Значение...',
        },
        {
            value: 'UTC+5',
            label: 'UTC+5',
        },
        {
            value: 'GMT+6',
            label: 'GMT+6',
        }

    ];
    const [val, setCurrency] = React.useState('defaultVal');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <Wrapper>
            <Container>
               <LogoContainer>
                   <ContainerForImg>
                       <img src="../../../assets/images/companyProfile.png" alt="#" width={171} height={171}/>
                       <button></button>
                       <p>Логотип Компании</p>
                   </ContainerForImg>
               </LogoContainer>
                <Form>
                    <div className="ml">
                        <Label>
                            Название компании
                        </Label>
                        <OutlinedInput
                            className="OutlinedInput"
                            id="outlined-adornment-weight"
                            variant="outlined"
                            placeholder="Введите данные..."
                            aria-describedby="outlined-weight-helper-text"
                        />
                        <Label>
                            Aдрес
                        </Label>
                        <OutlinedInput
                            className="OutlinedInput borderColor"
                            id="outlined-adornment-weight"
                            variant="outlined"
                            placeholder="Введите данные..."
                            aria-describedby="outlined-weight-helper-text"
                        />
                        <Label>
                            Часовой пояс
                        </Label>
                        <TextField

                            className="widthHeight OutlinedInput dropdown"
                            id="outlined-select-currency"
                            select
                            value={val}
                        >
                            {values.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <ContainerForContacts>
                            <Label>
                                Контактный телефон
                            </Label>
                            <div>
                                <OutlinedInput
                                    className="shortField"
                                    id="outlined-adornment-weight"
                                    variant="outlined"
                                    placeholder="+7- (___) - ___-__-__"
                                    aria-describedby="outlined-weight-helper-text"
                                />
                                <button></button>
                            </div>
                            <Flex className="mt">
                                <div>
                                    <Label>
                                        Домен сайта
                                    </Label>
                                    <OutlinedInput
                                        className="shortField"
                                        id="outlined-adornment-weight"
                                        variant="outlined"
                                        placeholder="Введите данные..."
                                        aria-describedby="outlined-weight-helper-text"
                                    />
                                </div>
                                <SiteAdress>
                                    <Label>
                                        Адрес сайта
                                    </Label>
                                    <OutlinedInput
                                        className="shortField"
                                        id="outlined-adornment-weight"
                                        variant="outlined"
                                        placeholder="Введите данные..."
                                        aria-describedby="outlined-weight-helper-text"
                                    />
                                </SiteAdress>
                            </Flex>
                        </ContainerForContacts>
                        <SaveAndCancelBtn className="mt">
                            <button className="save">Сохранить</button>
                            <button className="cancel">Отмена</button>
                        </SaveAndCancelBtn>
                    </div>

                </Form>
            </Container>
        </Wrapper>
    )
}

export default RegisterCompany;



