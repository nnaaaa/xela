# Generated by ariadne-codegen
# Source: ./gql/query.gql

from pydantic import Field

from .base_model import BaseModel


class Login(BaseModel):
    login: "LoginLogin"


class LoginLogin(BaseModel):
    access_token: str = Field(alias="accessToken")


Login.model_rebuild()
