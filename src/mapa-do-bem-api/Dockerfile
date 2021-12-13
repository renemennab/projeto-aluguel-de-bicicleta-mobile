FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["mapa-do-bem-api.csproj", "."]
RUN dotnet restore "./mapa-do-bem-api.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "mapa-do-bem-api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "mapa-do-bem-api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .


RUN useradd -m myappuser
USER myappuser

CMD ASPNETCORE_URLS="http://*:$PORT" dotnet mapa-do-bem-api.dll