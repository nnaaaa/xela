from diagrams import Cluster, Diagram
import diagrams.onprem.client as client
import diagrams.programming.framework as fw
from diagrams.custom import Custom
import diagrams.onprem.network as nw

with Diagram("XELA", filename="./system-diagram", show=True):
    nestjs = Custom("Nestjs", "resource/NestJS.png")
    nextjs = Custom("Web App", "resource/NextJS.png")
    ingest = nw.Nginx("ingress")
    
    
    with Cluster("Client"):
        web_app = [
            nextjs,
            ingest,
        ]
        
        client.Client() >> web_app
        
    with Cluster("Server"):
        server = [
            nestjs,
        ]
        web_app >> server
        
    
    