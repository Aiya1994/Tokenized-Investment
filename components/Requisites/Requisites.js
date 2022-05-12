import {Wrapper, Container } from "../CEOpage/CEOpage.style"
import {
    ContainerForContacts,
    Flex,
    Form,
    Label,
    SaveAndCancelBtn,
} from "../RegisterCompany/RegisterCompany.style";
import OutlinedInput from "@mui/material/OutlinedInput";
import * as React from "react";

function Requisites() {

    return (
        <Wrapper>
            <Container>
                <Form>
                    <ContainerForContacts>
                        <Flex class="no-margin">
                            <div className="block">
                                <Label>
                                    ОГРН
                                </Label>
                                <OutlinedInput
                                    id="outlined-adornment-weight"
                                    variant="outlined"
                                    placeholder="Введите данные..."
                                    aria-describedby="outlined-weight-helper-text"
                                />
                            </div>
                            <div className="block ml">
                                <Label>
                                    ИНН
                                </Label>
                                <OutlinedInput
                                    id="outlined-adornment-weight"
                                    variant="outlined"
                                    placeholder="Введите данные..."
                                    aria-describedby="outlined-weight-helper-text"
                                />
                            </div>
                            <div className="block ml">
                                <Label>
                                    КПП
                                </Label>
                                <OutlinedInput
                                    id="outlined-adornment-weight"
                                    variant="outlined"
                                    placeholder="Введите данные..."
                                    aria-describedby="outlined-weight-helper-text"
                                />
                            </div>
                        </Flex>
                        <Label className="mt">
                            Наименовние банка
                        </Label>
                        <OutlinedInput
                            className="extend"
                            id="outlined-adornment-weight"
                            variant="outlined"
                            placeholder="Введите данные..."
                            aria-describedby="outlined-weight-helper-text"
                        />
                        <Flex class="no-margin">
                            <div className="block">
                                <Label className="mt">
                                    БИК
                                </Label>
                                <OutlinedInput
                                    id="outlined-adornment-weight"
                                    variant="outlined"
                                    placeholder="Введите данные..."
                                    aria-describedby="outlined-weight-helper-text"
                                />
                            </div>
                            <div className="block ml">
                                <Label className="mt">
                                    Рассчетный счет
                                </Label>
                                <OutlinedInput
                                    id="outlined-adornment-weight"
                                    variant="outlined"
                                    placeholder="Введите данные..."
                                    aria-describedby="outlined-weight-helper-text"
                                />
                            </div>
                            <div className="block ml">
                                <Label className="mt">
                                    Корреспондентский счет
                                </Label>
                                <OutlinedInput
                                    id="outlined-adornment-weight"
                                    variant="outlined"
                                    placeholder="Введите данные..."
                                    aria-describedby="outlined-weight-helper-text"
                                />
                            </div>
                        </Flex>
                    </ContainerForContacts>
                    <SaveAndCancelBtn className="mt">
                        <button className="save">Сохранить</button>
                        <button className="cancel">Отмена</button>
                    </SaveAndCancelBtn>
                </Form>
            </Container>
        </Wrapper>
    )
}

export default Requisites;



