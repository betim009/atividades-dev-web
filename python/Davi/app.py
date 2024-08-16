import streamlit as st
import pandas as pd


st.text_input("Insira uma informação:")
df = pd.read_csv('tabelamusicas.csv')
st.dataframe(df)
